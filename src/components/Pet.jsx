import React from 'react';
import Feed from './Feed';
import Sleep from './Sleep';
import Play from './Play';
import Death from './Death';

class Pet extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      hunger: 10,
      boredom: 10,
      energy: 10,
      dead: false
    };
    this.handleFeed = this.handleFeed.bind(this);
    this.handleSleep = this.handleSleep.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }
  handleFeed(){
    this.setState({hunger: 10});
  }
  handleSleep(){
    this.setState({energy: 10});
  }
  handlePlay(){
    this.setState({boredom: 10});
  }
  updateFeedTime(){
    let newHunger = this.state.hunger;
    newHunger -= 1;
    this.setState({hunger: newHunger});
    if(this.state.hunger === 0){
      this.setState({dead: true});
    }
  }
  updatePlayTime(){
    let newBoredom = this.state.boredom;
    newBoredom -= 1;
    this.setState({boredom: newBoredom});
    if(this.state.boredom === 0){
      this.setState({dead: true});
    }
  }
  updateSleepTime(){
    let newEnergy = this.state.energy;
    newEnergy -= 1;
    this.setState({energy: newEnergy});
    if(this.state.energy === 0){
      this.setState({dead: true});
    }
  }

  componentDidMount() {
    this.feedTimeUpdateTimer = setInterval(() =>
      this.updateFeedTime(),
    3000
    );
    this.sleepTimeUpdateTimer = setInterval(() =>
      this.updateSleepTime(),
    5000
    );
    this.playTimeUpdateTimer = setInterval(() =>
      this.updatePlayTime(),
    2000
    );
  }
  render(){
    let currentlyVisibleContent = null;
    if(this.state.dead){
      currentlyVisibleContent = <Death />;
    }else {
      currentlyVisibleContent = <div>
        <Feed hunger={this.state.hunger}
          onFeed={this.handleFeed} />
        <Sleep energy={this.state.energy}
          onSleep={this.handleSleep} />
        <Play boredom={this.state.boredom}
          onPlay={this.handlePlay} />
      </div>;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );

  }
}

export default Pet;
