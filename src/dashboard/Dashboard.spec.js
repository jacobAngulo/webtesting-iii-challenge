// Test away!
import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";
import Dashboard from "./Dashboard";
import Display from "../display/Display";
import 'jest-dom/extend-expect'

describe("<Dashboard />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("is mocking me", () => {
    const mock = jest.fn();

    const result = mock();

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("should initially be unlocked and open", () => {
    const { getByTestId } = render(<Display />);
    const lock = getByTestId("lock-display");
    const gate = getByTestId("close-display");

    expect(lock).toHaveTextContent("Unlocked");
    expect(lock).toHaveClass("green-led");
    expect(gate).toHaveTextContent("Open");
    expect(gate).toHaveClass("green-led");
  });

  it("Should lock and unlock as expected", () => {
    const { getByTestId } = render(<Dashboard />);
    const lock = getByTestId("lock-display");
    const gate = getByTestId("close-display");

    fireEvent.click(getByTestId("close-btn"));
    expect(lock).toHaveTextContent("Unlocked");
    expect(gate).toHaveTextContent("Closed");
    expect(lock).toHaveClass("green-led");
    expect(gate).toHaveClass("red-led");

    fireEvent.click(getByTestId("lock-btn"));
    expect(lock).toHaveTextContent("Locked");
    expect(gate).toHaveTextContent("Closed");
    expect(lock).toHaveClass("red-led");
    expect(gate).toHaveClass("red-led");
  });
});
