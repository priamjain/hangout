import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar'
import Join from './Join'
import Chat from './Chat'
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <div className="app">
      {/*SideBar*/}
        <SideBar></SideBar>
      {/*Page According to SideBar*/}
      <Router>
        <Route path="/" exact component={Join}/>
        <Route path="/chat" exact component={Chat}/>
      </Router>
    </div>
  );
}

export default App;
