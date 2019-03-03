import React, { Component } from 'react';
import { library } from '@fortawesome/react-fontawesome';
import CountdownClock from './components/CountdownClock';
import BunqComponent from './components/BunqComponent';
import PasDag from './components/PasDag';
import MITComponent from './components/MITComponent';
import './App.css';

class App extends Component {
  state = {
    nextPasDagDate: this.NewDate('2019-03-11-19'),
    mitDate: this.NewDate('2019-05-30-19'),
    timeUntillPasDag: 0,
    timeUntillMIT: 0
  }
  constructor(props) {
    super(props)
    document.title = "Waar is die Pas?";
    this.updateTime = this.updateTime.bind(this)
    setInterval(this.updateTime, 1000)
  }
  updateTime() {
    this.updateTimeUntillPasDag();
    this.updateTimeUntillMit();
  }
  updateTimeUntillPasDag() {
    var diff = this.state.nextPasDagDate - this.NewDate();
    this.setState({
      timeUntillPasDag: diff
    });
  }
  updateTimeUntillMit() {
    var diff = this.state.mitDate - this.NewDate();
    this.setState({
      timeUntillMIT: diff
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
  todayIsMIT() {
    return (this.state.timeUntillMIT < 0);
  }
  ShowOnLandingPage() {
    if (this.todayIsPasDag()) {
      return <PasDag></PasDag>;
    }
    return <CountdownClock timeUntillPasDag={this.state.timeUntillPasDag}></CountdownClock>
  }

  renderMitPage() {
    if (this.todayIsMIT()) {
      return;
    }
    return <CountdownClock timeUntillPasDag={this.state.timeUntillMIT}></CountdownClock>
  }
  render() {
    var renderLandingPage = this.ShowOnLandingPage();
    var renderMitPage = this.renderMitPage();
    return (

      <div className="waar-is-die-pas-container">
        <div className="coutdown-page">
        {renderLandingPage}
        </div>
        <div className="mitcomponent-container">
          <span className="mit-title">MIT = LIT</span>
          {renderMitPage}
        </div>
      </div>

    );
  }
}

export default App;
