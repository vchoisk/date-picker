import React, { Component } from "react";
import "../stylesheets/App.css";
import DatePicker from "./DatePicker.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Date Picker</h1>
        </header>
        <DatePicker />
      </div>
    );
  }
}

export default App;
