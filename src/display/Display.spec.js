// Test away!
import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";
import Display from "./Display";

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("is mocking me", () => {
    const mock = jest.fn();

    const result = mock();

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
