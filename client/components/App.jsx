import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import Main from './Main.js';

// uncomment once we build out style sheets
// import '../stylesheets/styles.css';

// basic App RENDER CHECK with Login (Working)
// class App extends Component {
//   render() { 
//   return(<Login/>)
//   }
// }

const App = (props) => {
  return (
    <div className="router">
      <main>
        <h1>Parks and Rec App.jsx </h1>
        {/* <Router> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        {/* </Router> */}
      </main>
    </div>
  );
};

export default App;

      