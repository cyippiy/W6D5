import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date()


    };
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
  	this.intervalId = setInterval(this.tick, 1000);
  }


  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({date: new Date()});
  }


  render(){
    let minutes,hours,seconds;
    minutes = this.state.date.getMinutes();
    hours = this.state.date.getHours();
    seconds = this.state.date.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return(
      <h1>
      Time: {hours}:{minutes}:{seconds}
    </h1>
  );
  }

}

export default Clock;
