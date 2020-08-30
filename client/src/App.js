import React from 'react';
import './App.css';
import Join from './Components/Join'
import Chat from './Components/Chat'
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom'
function App() {
  return (
    <div className="app">
    <Router>
        <Route path="/"><Redirect to="/join"></Redirect></Route>
        <Route path="/join">
          <Join></Join>
        </Route>
        <Route path="/chat" component={Chat}/>
      </Router>
    </div>
  );
}

export default App;
