import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// {Routes, Route} for version 6
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Login from './Login.js';
// import Main from './Main.js';

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
        <h1>Parks and Rec</h1>
        <Routes>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/main" component={Main} /> */}
          {/* <Route exact path="/add" component={AddBook} /> */}
        </Routes>
      </main>
    </div>
  );
};

export default App;
      