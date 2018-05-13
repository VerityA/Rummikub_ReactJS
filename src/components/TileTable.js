import React from 'react';
import Tile from './Tile.js';

const TileTable = (props) => {
  const tiles = props.tiles.map((tile, index) => {
    return <Tile className="table-tile" key={index} value={tile.value} image={tile.img} colour={this.colour}/>
  });

  return(
    <div className="tile-table">
      {tiles}
    </div>
  );
};


export default TileTable;
