import React, { Component } from 'react';
import { library } from '@fortawesome/react-fontawesome';
import CountdownClock from './components/CountdownClock';
import BunqComponent from './components/BunqComponent';
import './App.css';

class App extends Component {
  state = {
    nextPasDagDate: new Date('2018-11-12:19:00'),
    timeUntillPasDag: 0
  }
  constructor(props) {
    super(props)
    document.title = "Waar is die Pas?";
    this.updateTimeUntillPasDag = this.updateTimeUntillPasDag.bind(this)
    setInterval(this.updateTimeUntillPasDag, 1000)
  }
  updateTimeUntillPasDag() {
    var diff = this.state.nextPasDagDate - new Date();
    this.setState({
      timeUntillPasDag: diff
    });
  }
  render() {
    return (
      <div className="waar-is-die-pas-container">
      <CountdownClock timeUntillPasDag={this.state.timeUntillPasDag}></CountdownClock>
      </div>
    );
  }
}

export default App;
