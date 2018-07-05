import React from 'react';
import PropTypes from 'prop-types';

function Feed(props){

  return(
    <div>
      <p>{props.hunger}</p>
      <button onClick={props.onFeed}>Feed</button>
    </div>
  );
}
Feed.propTypes = {
  hunger: PropTypes.number.isRequired,
  onFeed: PropTypes.func.isRequired
}
export default Feed;
