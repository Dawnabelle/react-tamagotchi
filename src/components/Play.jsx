import React from 'react';
import PropTypes from 'prop-types';

function Play(props){

  return(
    <div>
      <p>{props.boredom}</p>
      <button onClick={props.onPlay}>Play</button>
    </div>
  );
}
Play.propTypes = {
  boredom: PropTypes.number.isRequired,
  onPlay: PropTypes.func.isRequired
}
export default Play;
