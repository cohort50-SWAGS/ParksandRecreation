import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import Main from './Main.js';

// uncomment once we build out style sheets
import '../styling/style.css';

const App = (props) => {
  return (
    <div className="router">
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
};

export default App;

      