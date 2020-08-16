import React from 'react';
import './App.css';
import SideBar from './SideBar'
import Main from './Main'
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <div className="app">
      {/*SideBar*/}
        <SideBar></SideBar>
      {/*Page According to SideBar*/}
      <Router>
        <Route path="/" exact component={Main}/>
      </Router>
    </div>
  );
}

export default App;
