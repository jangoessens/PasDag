import React, { Component } from 'react';
import { library } from '@fortawesome/react-fontawesome';
import CountdownClock from './components/CountdownClock';
import BunqComponent from './components/BunqComponent';
import PasDag from './components/PasDag';
import './App.css';

class App extends Component {
  state = {
    // nextPasDagDate: this.NewDate('2018-12-9-23'),
     nextPasDagDate: this.NewDate('2018-11-11-23'),
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
      date.setUTCHours(str[3], 0, 0, 0);
    }
    return date;
  }
  todayIsPasDag() {
    return (this.state.timeUntillPasDag < 0);
  }
  ShowOnLandingPage() {
    if (this.todayIsPasDag()) {
      return <PasDag></PasDag>;
    }
    return <CountdownClock timeUntillPasDag={this.state.timeUntillPasDag}></CountdownClock>
  }
  render() {
    var renderLandingPage = this.ShowOnLandingPage();
    return (
      <div className="waar-is-die-pas-container">
        {renderLandingPage}
      </div>
    );
  }
}

export default App;
