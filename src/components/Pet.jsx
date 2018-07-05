import React from 'react';

class Pet extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      hunger = 10;
      boredom= 10;
      energy = 10;
    }
  }
  handleFeed(){
    this.setState({hunger: 10})
  }
  handleSleep(){
    this.setState({energy: 10})
  }
  handlePlay(){
    this.setState({boredom: 10})
  }

  return(
    <div>

    </div>
  );
}

export default Pet;
