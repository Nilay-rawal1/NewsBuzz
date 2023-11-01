import "./App.css";
import News from "./components/News";
import NavBar from "./components/NavBar";
import React, { Component } from "react";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";


export default class App extends Component {
 
  apikey=process.env.REACT_APP_NEWS_API
  state={
        progress:0
  }
  
  pageSize=15;
  setProgress =(progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
        
      <div  style={{background:"linear-gradient(89.7deg, rgb(22, 22, 5) 1.8%, rgb(12, 19, 50) 100%",overflow:"auto",height:"100%"}}>
        <Router>
        <NavBar />
        <LoadingBar
        color='#7c8dd9'
        height={4}
        progress={this.state.progress}
        
      />
        <Switch>
          <Route  exact path="/"><News  setProgress={this.setProgress} apikey={this.apikey}     key="general"  pagesize={this.pageSize}  country="in" category="General" /></Route>
          <Route  exact path="/business"><News  setProgress={this.setProgress} apikey={this.apikey}     key="business"  pagesize={this.pageSize}  country="in" category="Business" /></Route>
          <Route  exact path="/entertainment"><News  setProgress={this.setProgress} apikey={this.apikey}     key="entertainment"  pagesize={this.pageSize}  country="in" category="Entertainment" /></Route>
          
          <Route  exact path="/health"><News  setProgress={this.setProgress} apikey={this.apikey}     key="health"  pagesize={this.pageSize}  country="in" category="Health" /></Route>
          <Route  exact path="/science "><News  setProgress={this.setProgress} apikey={this.apikey}     key="science"  pagesize={this.pageSize}  country="in" category="Science" /></Route>
          <Route  exact path="/sports"><News  setProgress={this.setProgress} apikey={this.apikey}     key="sports"  pagesize={this.pageSize}  country="in" category="Sports" /></Route>
          <Route  exact path="/technology"><News  setProgress={this.setProgress} apikey={this.apikey}     key="technology"  pagesize={this.pageSize}  country="in" category="Technology" /></Route>   
          </Switch>

        </Router>
      </div>
    
    );
  }
}
