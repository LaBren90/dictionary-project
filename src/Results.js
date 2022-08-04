import React from "react";
import Meaning from "./Meaning";
export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meaning meaning={meanings} />
            </div>
          );
          // meanings.definitions[0].definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}
