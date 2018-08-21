import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      secs: 0
    }
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const secs = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor((time/(1000*60*60))%24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      secs: secs
    });
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  firstZero(num) {
    return num < 10 ? '0' + num : num;
  }
  render() {
    return (
      <div className="text-center">
        <p className="mx-3 d-block">{this.firstZero(this.state.days)} days</p>
        <p className="mx-3 d-block">{this.firstZero(this.state.hours)} hours </p>
        <p className="mx-3 d-block">{this.firstZero(this.state.minutes)} minutes </p>
        <p className="mx-3 d-block">{this.firstZero(this.state.secs)} seconds</p>
      </div>
    );
  };
}

export default Clock;
