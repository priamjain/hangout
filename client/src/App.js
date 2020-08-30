import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './Components/Auth'
import Join from './Components/Join'
import Main from './Components/Main'
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <div className="app">
    <Router>
        <Route path="/join">
          <Join></Join>
        </Route>
        <Route path="/chat">
          <Main ></Main>
        </Route>
      </Router>
    </div>
  );
}

export default App;
