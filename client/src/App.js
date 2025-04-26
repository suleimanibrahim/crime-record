import React, { Component } from "react";

import {Router, Route, browserHistory, Redirect} from "react-router";

import Home from './Components/Home.js'
import PoliceHome from './Components/PoliceHome.js';
import NewFIR from './Components/NewFIR.js';
import ViewCase from './Components/ViewCase.js';
import Forensics from './Components/Forensics.js';
import ForensicsHome from './Components/ForensicHome.js'
import ForensicUpdate from './Components/ViewForensic.js'

import "./App.css";

class App extends Component {

  render() {
      return (
        <Router history={browserHistory}>   
            <Redirect from="/" to="/home" />
            <Route> 
              <Route path = "police" component = {PoliceHome}/>
              <Route path = "newfir" component = {NewFIR}/>
              <Route path = "viewcase/:caseId" component = {ViewCase}/>
              <Route path = "home" component = {Home}></Route>
              <Route path = "forensichome" component = {ForensicsHome}></Route>
              <Route path = "crimedata/forensics/:caseId/" component = {Forensics}/>   
              <Route path = "forensicUpdate/:caseId" component = {ForensicUpdate}></Route>  
               
            </Route>                 
        </Router>
    );
  }
}
export default App;
