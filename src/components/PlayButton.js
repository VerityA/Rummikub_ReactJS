import React from 'react';

const PlayButton = (props) => {

  return(
    <button className="play-button" onClick={props.handlePlayClick}>Let's Play!</button>
  );

};

export default PlayButton;
