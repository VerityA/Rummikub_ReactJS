import React from 'react';

const Tile = (props) => {
  return(
        <input className={props.className} type="image" src={props.image} value={props.value} colour={props.colour}></input>
  );
};


export default Tile;
