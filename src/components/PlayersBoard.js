import React from 'react';
import Tile from './Tile.js';

const PlayersBoard = (props) => {
  const tiles = props.tiles.map((tile, index) => {
    return <Tile className="player-tile" key={index} value={tile.value} image={tile.img} colour={this.colour}/>
  });

  return(
    <div className="players-table">
      {tiles}
    </div>
  );
};


export default PlayersBoard;
