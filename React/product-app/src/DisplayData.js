import React from "react";

//{} template syntax
export const DisplayData = ({ name, pic }) => {
  return (
    <React.Fragment>
      <div>
        <h1>{name}</h1>
        <img className="pic" src={pic} alt={name}></img>
      </div>
    </React.Fragment>
  );
};
