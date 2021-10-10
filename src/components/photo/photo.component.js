import React from "react";

const Photo = (props) => {
  const date = new Date(props.post.date_taken)
    .toLocaleDateString("en-GB")
    .split("/")
    .join("-");

  const emailRegex = '"(.*?)"';
  const email = props.post.author;
  const newEmail = email.match(emailRegex);

  return (
    <figure className="grid-figure">
      <img src={props.post.media.m} alt="Benni" className="grid-photo" />
      <figcaption>
        <p>{newEmail[1]}</p>
        <p>{date}</p>
        <p>{props.post.tags}</p>
      </figcaption>
    </figure>
  );
};
export default Photo;
