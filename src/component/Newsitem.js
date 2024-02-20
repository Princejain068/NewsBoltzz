import React from "react";

export default function Newsitem(props) {
  let { title, description, imageUrl, newsurl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge pill bg-danger">
            {author ? author : "Unknown Author"}
            <span className="visually-hidden"> </span>
          </span>
        </div>
        <img src={imageUrl} className="card-img-top" />
        <div className="card-body">
          <div className="con"></div>
          <h5 className="card-title">{title ? title : "Untitled"}</h5>
          <p className="card-text">{description}</p>
          <p class="card-text"><small class="text-body-secondary">{new Date (date).toGMTString()} @{source}</small></p>
          <a href={newsurl} target="_blank" className="btn btn-dark">
            Read more..
          </a>
        </div>
      </div>
    </div>
  );
}
