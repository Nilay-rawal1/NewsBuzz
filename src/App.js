import "./App.css";
import News from "./components/News";

import NavBar from "./components/NavBar";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News pagesize={6} />
        
      </div>
    );
  }
}
