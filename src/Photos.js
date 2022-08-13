import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div
                className="col-4 d-inline-flex justify-content-center"
                key={index}
              >
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.tiny}
                    alt={photo.alt}
                    className="img-fluid d-inline-flex justify-content-center mb-4"
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
