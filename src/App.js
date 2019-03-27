import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import BaseWeight from './BaseWeight';
import LeanBulkRestDayCard from './LeanBulkRestDayCard';
import LeanBulkGymDayCard from './LeanBulkGymDayCard';

class App extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      showCard: false,
    }
  }

  toggleShowCard() {
    if (this.state.showCard === false) {
      this.setState({showCard: true})
    } else if (this.state.showCard === true) {
      this.setState({showCard: false})
    }
  }

  handleButtonClick() {
    this.toggleShowCard();
  }
  
  render() {

    return (
      <div className="App">
        <div style={{width: 1680, height: 60}}>
            <div><span><i id="header-logo" className="fas fa-calculator">MetaCalc</i></span></div>
        </div>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div><h1 className="Main-Title">MetaCalc</h1><span className="Calculator-Style"><i className="fas fa-calculator"></i></span></div>
          <p>
            Split your Macros with the click of a button!
          </p>
          <div>
            <label></label>
            <input className="Main-Input" placeholder="Weight in lbs"/>
            <button 
                id="button">
                    <span class="button-style">
                        <i className="far fa-caret-square-right"></i>
                    </span>
            </button>
          </div>
        </header>
        <div className="Card-Container">
          <BaseWeight onclick={this.handleButtonClick}/>

          <LeanBulkRestDayCard />
          
          <LeanBulkGymDayCard />

        </div>
      </div>
    );
  }
}

export default App;
