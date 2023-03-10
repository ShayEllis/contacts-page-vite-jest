import React from "react";
import { Tile } from '../../components/tile/Tile'

export const TileList = (props) => {
  return (
    <div>
      {props.objArr ? props.objArr.map((obj) => <Tile obj={obj} key={obj.name ? obj.name : obj.title} />) : <p>Nothing to Show</p>}
    </div>
  );
};
