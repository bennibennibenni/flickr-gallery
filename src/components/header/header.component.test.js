import "@testing-library/jest-dom";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Header from "../header/header.component";

test("render header with title", () => {
  const title = "Flickr Gallery";
  render(
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
  );

  expect(screen.getByTestId("title")).toHaveTextContent(title);
});
