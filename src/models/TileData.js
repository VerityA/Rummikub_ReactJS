class TileData {

  addTilesOfColour(colour) {
    const tiles = [];

    for (let i = 1; i <13; i++) {
      tiles.push({
        colour: colour,
        value: i,
        img: `./images/${colour}_${i}.png`
      });
    };

    return tiles;

  };

  addWildTiles() {
    const tiles = [];

    for (let i = 1; i <3; i++) {
      tiles.push({
        colour: "wild",
        value: 0,
        img: `./images/wild.png`
      });
    };

    return tiles;
  };

  createAllTiles() {

    const wilds = this.addWildTiles();

    const blues_1 = this.addTilesOfColour("blue");
    const blues_2 = this.addTilesOfColour("blue");

    const red_1 = this.addTilesOfColour("red");
    const red_2 = this.addTilesOfColour("red");

    const orange_1 = this.addTilesOfColour("orange");
    const orange_2 = this.addTilesOfColour("orange");

    const black_1 = this.addTilesOfColour("black");
    const black_2 = this.addTilesOfColour("black");

    const allTiles = blues_1.concat(blues_2, red_1, red_2, orange_1, orange_2, black_1, black_2, wilds);

    return allTiles;
  };

  getStartingTiles(tiles) {
    const startingTiles = [];

    for (let i =0; i<14; i++) {
      const randomTile = tiles[Math.floor(Math.random()*tiles.length)];
      startingTiles.push(randomTile);
    };

    return startingTiles;
  };


};

export default TileData;
