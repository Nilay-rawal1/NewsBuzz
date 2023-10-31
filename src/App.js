import "./App.css";
import News from "./components/News";
import NavBar from "./components/NavBar";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";


export default class App extends Component {
  pageSize=15;
  render() {
    return (
        
      <div  style={{background:"linear-gradient(89.7deg, rgb(22, 22, 5) 1.8%, rgb(12, 19, 50) 100%",overflow:"auto",height:"100%"}}>
        <Router>
        <NavBar />
        <Switch>
          <Route  exact path="/"><News key="general"  pagesize={this.pageSize}  country="in" category="General" /></Route>
          <Route  exact path="/business"><News key="business"  pagesize={this.pageSize}  country="in" category="Business" /></Route>
          <Route  exact path="/entertainment"><News key="entertainment"  pagesize={this.pageSize}  country="in" category="Entertainment" /></Route>
          
          <Route  exact path="/health"><News key="health"  pagesize={this.pageSize}  country="in" category="Health" /></Route>
          <Route  exact path="/science "><News key="science"  pagesize={this.pageSize}  country="in" category="Science" /></Route>
          <Route  exact path="/sports"><News key="sports"  pagesize={this.pageSize}  country="in" category="Sports" /></Route>
          <Route  exact path="/technology"><News key="technology"  pagesize={this.pageSize}  country="in" category="Technology" /></Route>   
          </Switch>

        </Router>
      </div>
    
    );
  }
}
