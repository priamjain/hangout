import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './Components/Auth'
import Join from './Components/Join'
import Main from './Components/Main'
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
	const [token, setToken] = useState("");
  return (
    <div className="app">
    <Router>
       <Route path="/" exact>
          <Auth setToken={setToken}></Auth>
       </Route>
        <Route path="/join">
          <Join token={token}></Join>
        </Route>
        <Route path="/chat">
          <Main token={token}></Main>
        </Route>
      </Router>
    </div>
  );
}

export default App;
