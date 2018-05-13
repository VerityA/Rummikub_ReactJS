import React, {Component} from 'react';
import Take14TilesButton from '../components/Take14TilesButton.js';
import TakeExtraTileButton from '../components/TakeExtraTileButton.js';
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
    this.handleTakeExtraTileClick = this.handleTakeExtraTileClick.bind(this);
  };

  handleTake14TilesClick() {
    const tempState = this.state;
    const clickResult = this.tileData.getStartingTilesFromBox(this.state.boxTiles)
    const startingTiles = clickResult.startingTiles;
    const remainingBox = clickResult.remainingBox;

    tempState.player1Tiles = startingTiles;
    tempState.boxTiles = remainingBox;
    this.setState(tempState);
  };

  handleTakeExtraTileClick() {
    const tempState = this.state;
    const clickResult = this.tileData.getExtraTileFromBox(this.state.boxTiles)
    console.log('clickResult: ', clickResult);
    const extraTile = clickResult.extraTile;
    const remainingBox = clickResult.remainingBox;

    console.log('extraTile: ', extraTile);

    this.state.player1Tiles.push(extraTile);

    const sortedNewPlayer1Tiles = this.tileData.sortTilesByColourThenValue(this.state.player1Tiles);

    tempState.player1Tiles = sortedNewPlayer1Tiles;
    tempState.boxTiles = remainingBox;
    this.setState(tempState);
  };


  render() {
    return(
      <div>
        <Take14TilesButton disabled={this.state.player1Tiles.length !== 0} handleTake14TilesClick={this.handleTake14TilesClick}/>
        <TakeExtraTileButton disabled={this.state.boxTiles.length === 0 || this.state.player1Tiles.length === 0} handleTakeExtraTileClick={this.handleTakeExtraTileClick}/>
        <TileTable tiles={this.state.boxTiles}/>
        <PlayersBoard tiles={this.state.player1Tiles}/>
      </div>
    );
  };




};



export default GameContainer;
