import React, { Component } from 'react';
import { library } from '@fortawesome/react-fontawesome';
import CountdownClock from './components/CountdownClock';
import BunqComponent from './components/BunqComponent';
import './App.css';

class App extends Component {
  state = {
    nextPasDagDate: this.NewDate('2018-11-12'),
    timeUntillPasDag: 0
  }
  constructor(props) {
    super(props)
    document.title = "Waar is die Pas?";
    this.updateTimeUntillPasDag = this.updateTimeUntillPasDag.bind(this)
    setInterval(this.updateTimeUntillPasDag, 1000)
  }
  updateTimeUntillPasDag() {
    var diff = this.state.nextPasDagDate - this.NewDate();
    this.setState({
      timeUntillPasDag: diff
    });
  }
  NewDate(str) {
    var date = new Date();
    if (str != null) {
      str = str.split('-');
      date.setUTCFullYear(str[0], str[1] - 1, str[2]);
      date.setUTCHours(0, 0, 0, 0);
    }
    return date;
  }
  render() {
    return (
      <div className="waar-is-die-pas-container">
        hoi
        <CountdownClock timeUntillPasDag={this.state.timeUntillPasDag}></CountdownClock>
      </div>
    );
  }
}

export default App;
