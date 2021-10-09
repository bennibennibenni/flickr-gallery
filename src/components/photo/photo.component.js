import React from "react";

const Photo = (props) => {
  const date = new Date(props.post.date_taken)
    .toLocaleDateString("en-GB")
    .split("/")
    .join("-");

  const emailRegex =
    // eslint-disable-next-line
    /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  const email = props.post.author;
  const newEmail = email.match(emailRegex);

  return (
    <figure className="grid-figure">
      <div className="grid-phot-wrap">
        <img src={props.post.media.m} alt="Benni" className="grid-photo" />
        <figcaption>
          <p>{date}</p>
          <p>{newEmail[0]}</p>
          <p>{props.post.tags}</p>
          <div className="control-buttons">
            <span className="comment-count">
              <span className="speech-bubble" />
              {/* <span style={{ paddingLeft: '5px' }}>
                  {comments && code && comments[code] ? comments[code].length : 0}
                </span> */}
            </span>
          </div>
        </figcaption>
      </div>
    </figure>
  );
};
export default Photo;
