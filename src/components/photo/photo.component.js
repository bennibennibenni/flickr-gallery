import React from "react";

const Photo = (props) => {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Asia/Singapore",
  };
  const date = new Date(props.post.date_taken)
    .toLocaleString("SG", options)
    .split("/")
    .join("-");

  const emailRegex = '"(.*?)"';
  const email = props.post.author;
  const authorName = email.match(emailRegex);

  return (
    <figure className="grid-figure">
      <img src={props.post.media.m} alt="media" className="grid-photo" />
      <figcaption>
        <p data-testid="author-name">{authorName[1]}</p>
        <p data-testid="date">{date}</p>
        <p data-testid="tags">{props.post.tags}</p>
      </figcaption>
    </figure>
  );
};
export default Photo;
