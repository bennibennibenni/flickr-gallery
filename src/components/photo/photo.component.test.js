import "@testing-library/jest-dom";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import Photo from "../photo/photo.component";

describe("render photo with props data", () => {
  const props = {
    i: 0,
    post: {
      author: 'nobody@flickr.com ("Cassandra Mosley")',
      author_id: "132447713@N07",
      date_taken: "2018-03-09T15:54:34-08:00",
      description:
        ' <p><a href="https://www.flickr.com/people/cassandramosley/">Cassandra Mosley</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/cassandramosley/51570228492/" title="DSC_3852.jpg"><img src="https://live.staticflickr.com/65535/51570228492_f6e1900156_m.jpg" width="160" height="240" alt="DSC_3852.jpg" /></a></p> ',
      link: "https://www.flickr.com/photos/cassandramosley/51570228492/",
      media: {
        m: "https://live.staticflickr.com/65535/51570228492_f6e1900156_m.jpg",
      },
      tags: "districtofcolumbia spring cherryblossom northamerica flower tidalbasin unitedstates jeffersonmemorial bloom dc",
      title: "DSC_3852.jpg",
    },
  };
  test("photo component contain img tag and source", () => {
    render(<Photo {...props}></Photo>);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute(
      "src",
      "https://live.staticflickr.com/65535/51570228492_f6e1900156_m.jpg"
    );
    expect(logo).toHaveAttribute("alt", "media");
  });

  test("photo component contain author name", () => {
    render(<Photo {...props}></Photo>);
    expect(screen.getByTestId("author-name")).toHaveTextContent(
      "Cassandra Mosley"
    );
  });

  test("photo component contain tags", () => {
    render(<Photo {...props}></Photo>);
    expect(screen.getByTestId("tags")).toHaveTextContent(
      "districtofcolumbia spring cherryblossom northamerica flower tidalbasin unitedstates jeffersonmemorial bloom dc"
    );
  });
});
