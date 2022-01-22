import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Description from './components/description';
import ImageContent from './components/ImageContent';
import MoreInfo from './components/MoreInfo';
import Footer from './components/Footer';
import Footer1 from './components/Footer1'
import GetTemplate from './components/GetTemplate';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          <Header/>
            <Switch>
                <Route exact path="/Portfolio"> 
                    <Portfolio/>
                    <ImageContent/>
                    <Footer1/>
                </Route>
                <Route exact path="/AboutMe"> 
                    <AboutMe/>
                    <Footer1/>
                </Route>
                <Route exact path="/GetTemplate"> 
                    <GetTemplate/>
                </Route>
                <Route exact path="/Blog"> 
                    <Blog/>
                    <Footer1/>
                </Route>
                <Route exact path="/">
                    <Description/>
                    <ImageContent/>
                    <MoreInfo/>
                    <Footer1/>
                </Route>
            </Switch>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
