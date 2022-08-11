import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div classsName="col-3 d-inline-flex" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-flex"
                >
                  <img
                    src={photo.src.tiny}
                    alt={photo.alt}
                    className="img-fluid d-inline-flex"
                  />
                </a>{" "}
              </div>
            );
          })}{" "}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
