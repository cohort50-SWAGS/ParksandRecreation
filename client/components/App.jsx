import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// {Routes, Route} for version 6
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
// import AddBook from './AddBook';

// import '../stylesheets/styles.css';
// class App extends Component {
//   render() {
//     return <h1>Header from React</h1>;
//   }
// }
const App = (props) => {
  return (
    <div className="router">
      <main>
        <h1>Parks and Rec</h1>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/add" component={AddBook} /> */}
        </Switch>
      </main>
    </div>
  );
};

export default App;
      