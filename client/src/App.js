import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Join from './Join'
import Chat from './Chat'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
function App() {
  return (
    <div className="app">
    <Router>
        <Route path="/"> <Redirect to="/join" /></Route>
        <Route path="/join" component={Join}/>
        <Route path="/chat" exact component={Chat}/>
      </Router>
    </div>
  );
}

export default App;
