import React from 'react';
import PropTypes from 'prop-types';

function Sleep(props){

  return(
    <div>
      <p>{props.energy}</p>
      <button onClick={props.onSleep}>Sleep</button>
    </div>
  );
}
Sleep.propTypes = {
  energy: PropTypes.number.isRequired,
  onSleep: PropTypes.func.isRequired
}
export default Sleep;
