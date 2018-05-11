import React, {Component} from 'react';
// import PlayerBoard from '../components/PlayerBoard.js';
// import Tile from '../components/Tile.js';
import Take14TilesButton from '../components/Take14TilesButton.js';
import PlayButton from '../components/PlayButton.js';
import TileData from '../models/TileData.js';
import TileTable from '../components/TileTable.js';
import PlayersBoard from '../components/PlayersBoard.js';

class GameContainer extends Component {
  constructor(props) {
    super(props);

    this.tileData = new TileData();

    this.state = {
      boxTiles: [],
      player1Tiles: [],
      player2Tiles: [],
      player3Tiles: [],
      player4Tiles: []
    };

    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleTake14TilesClick = this.handleTake14TilesClick.bind(this);
  };

  startGame(){
    const tempState = this.state;
    tempState.boxTiles = this.tileData.createAllTiles();
    this.setState(tempState);
  };

  handlePlayClick() {
    this.startGame();
  };

  handleTake14TilesClick() {
    const tempState = this.state;
    tempState.player1Tiles = this.tileData.getStartingTiles(this.state.boxTiles);
    this.setState(tempState);
  };


  render() {
    return(
      <div>
        <PlayButton handlePlayClick={this.handlePlayClick}/>
        <Take14TilesButton handleTake14TilesClick={this.handleTake14TilesClick}/>
        <TileTable tiles={this.state.boxTiles}/>
        <PlayersBoard tiles={this.state.player1Tiles}/>
      </div>
    );
  };




};



export default GameContainer;
