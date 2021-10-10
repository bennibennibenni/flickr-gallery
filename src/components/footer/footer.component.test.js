import "@testing-library/jest-dom";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../footer/footer.component";

test("render footer with footer text", () => {
  render(<Footer />);
  const textFooter = "Copyright © 2021 BENNI . All rights reserved.";
  expect(screen.getByTestId("footer-text")).toHaveTextContent(textFooter);
});
