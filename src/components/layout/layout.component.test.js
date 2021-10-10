import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import Layout from "../layout/layout.component";

test("render layout", () => {
  render(<Layout />);
});
