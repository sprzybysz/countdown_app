import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: 'January 1, 2019',
      newDeadline: ''
    }
  }
  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 col-content d-flex flex-column">
              <div className="align-self-center">
                <h1 className="text-center">Countdown to {this.state.deadline}</h1>
                <Clock deadline={this.state.deadline}/>
                <input onChange={ e => this.setState({newDeadline: e.target.value})} className="p-1" type="text"/>
                <button onClick={() => this.changeDeadline()} className="btn btn-outline-light w-75 my-3 d-block mx-auto">Let's start!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
