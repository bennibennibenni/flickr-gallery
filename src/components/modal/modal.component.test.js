import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import Modal from "../modal/modal.component";

test("render modal", () => {
  render(<Modal />);
});
