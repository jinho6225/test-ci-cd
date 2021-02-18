import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

describe("Jest test", () => {
  test("it works", () => {
    const root = document.createElement("div");
    ReactDOM.render(<App />, root);

    expect(root.querySelector("h2").textContent).toBe("Todo List");
  });
});
