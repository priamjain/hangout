import React from 'react';
import './App.css';
import SideBar from './SideBar'
import Main from './Main'
function App() {
  return (
    <div className="app">
      {/*SideBar*/}
        <SideBar></SideBar>
      {/*Page According to SideBar*/}
        <Main></Main>
    </div>
  );
}

export default App;
