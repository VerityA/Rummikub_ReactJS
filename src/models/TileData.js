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

  sortTilesByColourThenValue(tiles) {
    console.log(tiles);
    const colours = ["black", "blue", "orange", "red", "wild"];

    const colourArrays = [];
    colours.forEach((colour) => {
      const colourTiles = tiles.filter((tile) => tile.colour === colour);
      colourTiles.sort(function (tile1, tile2) {
        return tile1.value - tile2.value;
      });
      colourArrays.push(colourTiles);
    });

    const concatColourArray =  colourArrays.reduce(
      function(firstArray, colourArray) {
        return firstArray.concat(colourArray);
      },
      []
    );

    return concatColourArray;
  };

  removeTileFromBox(selectedTile, box) {
    const indexOfTile = box.findIndex(tile => tile.colour === selectedTile.colour && tile.value === selectedTile.value);
    box.splice(indexOfTile, 1);
    return box;
  };

  getRandomTileFromBox(box){
    const randomTile = box[Math.floor(Math.random()*box.length)];
    return randomTile;
  };

  getExtraTileFromBox(box) {
    const randomTile = this.getRandomTileFromBox(box);
    box = this.removeTileFromBox(randomTile, box);

    console.log('randomTile: ', randomTile);

    return {"extraTile" : randomTile, "remainingBox" : box};
};

getStartingTilesFromBox(box) {
  const startingTiles = [];

  for (let i =0; i<14; i++) {
    const randomTile = this.getRandomTileFromBox(box);
    startingTiles.push(randomTile);
    box = this.removeTileFromBox(randomTile, box);2
  };

  const sortedTiles = this.sortTilesByColourThenValue(startingTiles);

  return {"startingTiles" : sortedTiles, "remainingBox" : box};
};
};

module.exports = TileData;
