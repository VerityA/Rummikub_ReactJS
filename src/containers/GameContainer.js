import React, {Component} from 'react';
import Take14TilesButton from '../components/Take14TilesButton.js';
import TileData from '../models/TileData.js';
import TileTable from '../components/TileTable.js';
import PlayersBoard from '../components/PlayersBoard.js';

class GameContainer extends Component {
  constructor(props) {
    super(props);

    this.tileData = new TileData();

    this.state = {
      boxTiles: this.tileData.createAllTiles(),
      player1Tiles: [],
      player2Tiles: [],
      player3Tiles: [],
      player4Tiles: []
    };

    this.handleTake14TilesClick = this.handleTake14TilesClick.bind(this);
  };

  handleTake14TilesClick() {
    const tempState = this.state;
    tempState.player1Tiles = this.tileData.getStartingTiles(this.state.boxTiles);
    this.setState(tempState);
  };


  render() {
    return(
      <div>
        <Take14TilesButton handleTake14TilesClick={this.handleTake14TilesClick}/>
        <TileTable tiles={this.state.boxTiles}/>
        <PlayersBoard tiles={this.state.player1Tiles}/>
      </div>
    );
  };




};



export default GameContainer;
