import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import Main from './Main.js';
import Error from './Error.js';
import '../styling/style.css';
import SearchTrips from './SearchTrips.js';

const App = (props) => {
  return (
    <div className="router">
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/main/" element={<Main />}>
              <Route path="searchTrips" element={<SearchTrips/>} />
              {/* Have a Saved List/Likes Page nested in Main */}``
            </Route>
            <Route path='/error' element={<Error/>} />
            {/* <Route path="/floppyseal" element={<h1></h1>} >
                <Route path="avi" element={<Error />} />
            </Route> */}
          </Routes>
        </Router>
      </main>
    </div>
  );
};

// function Router = (props) {
//   return <div>
//     props.children
//   </div>
// }

export default App;