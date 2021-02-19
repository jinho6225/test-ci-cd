import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";

import App from "./App";
import List from "./List";

describe("App component", () => {
  test("renders the correct content", () => {
    const { getByText, getByLabelText } = render(<App />);
    getByText("Todo List");
    getByLabelText("What needs to be done?");
    getByText("ADD");
  });

  test("allows users to add todos to their list", () => {
    const { getByText, getByLabelText, getByTestId } = render(<App />);

    const input = getByLabelText("What needs to be done?");
    const button = getByText("ADD");
    fireEvent.change(input, { target: { value: "study testing" } });
    fireEvent.click(button);

    getByText("study testing");
    getByTestId("btnRmv");
  });
});
