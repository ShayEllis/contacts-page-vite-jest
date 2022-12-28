import React from "react";
import { Tile } from '../../components/tile/Tile'
//receives props.contacts
/*
-Receive one prop:
  -An array of objects to render as a list
-Use the array passed via props to iteratively render Tile components, passing each object in the array as a prop to each rendered Tile component
*/

export const TileList = (props) => {
  return (
    <div>
      {props.contacts.map((contact) => <Tile contact={contact} key={contact.name} /> )}
    </div>
  );
};
