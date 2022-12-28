import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {Object.values(props.obj).map((value, index) => <p className={index ? "tile" : "tile-title"} key={index}>{value}</p>)}
    </div>
  );
};
