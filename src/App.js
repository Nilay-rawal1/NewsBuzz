import "./App.css";
import React, { Component } from "react";
import LoadingBar from 'react-top-loading-bar'
import News from "./components/News";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Register from "./components/login&register/Register";
import Login from "./components/login&register/Login";
import NewsUpload from "./components/crud/NewsUpload";
import Dashboard from "./components/crud/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {

  state = {
    progress: 0
  }

  pageSize = 15;

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <>
        <div style={{ background: "linear-gradient(89.7deg, rgb(22, 22, 5) 1.8%, rgb(12, 19, 50) 100%", overflow: "auto", height: "100%" }}>
          <div style={{ display: "flex" }}> <Sidebar /></div>
          <Router>
            <NavBar />
            <LoadingBar
              color='#7c8dd9'
              height={4}
              progress={this.state.progress} />

            <Switch>
              {/* News Routes */}
              <Route exact path="/">
                <News setProgress={this.setProgress} key="general" pagesize={this.pageSize} country="in" category="General" />
              </Route>
              <Route exact path="/business">
                <News setProgress={this.setProgress} key="business" pagesize={this.pageSize} country="in" category="Business" />
              </Route>
              <Route exact path="/entertainment">
                <News setProgress={this.setProgress} key="entertainment" pagesize={this.pageSize} country="in" category="Entertainment" />
              </Route>
              <Route exact path="/health">
                <News setProgress={this.setProgress} key="health" pagesize={this.pageSize} country="in" category="Health" />
              </Route>
              <Route exact path="/science">
                <News setProgress={this.setProgress} key="science" pagesize={this.pageSize} country="in" category="Science" />
              </Route>
              <Route exact path="/sports">
                <News setProgress={this.setProgress} key="sports" pagesize={this.pageSize} country="in" category="Sports" />
              </Route>
              <Route exact path="/technology">
                <News setProgress={this.setProgress} key="technology" pagesize={this.pageSize} country="in" category="Technology" />
              </Route>

              {/* Authentication Routes */}
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>

              {/* News Upload Route */}
              <Route path="/news-upload">
                <NewsUpload setProgress={this.setProgress} />
              </Route>

              {/* Dashboard Route */}
              <Route path="/dashboard">
                <Dashboard />
              </Route>

            </Switch>

          </Router>
        </div>
      </>
    );
  }
}
