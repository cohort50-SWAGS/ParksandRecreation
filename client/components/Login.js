// Clean up the unused imports
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Link, withRouter } from 'react-router-dom';
import Main from './Main.js';


// component for the whole login page
function Login(props) {
  let navigate = useNavigate();

  // establish our state
  // Move this State into Top Level 
  const [verified, setVerified] = useState();
  const [userTrips, setUserTrips] = useState([]);
  const [username, setUsername] = useState('default');

  // function activated when user clicks "create user"
  // Modularize Functions into componentsHelpers Folder - LoginHelper
  function createUser() {

    fetch('/addUser', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/JSON'},
      body: JSON.stringify({
        username: document.querySelector('#Username').value,
        password: document.querySelector('#Password').value,
      })
    })
    .then((response) => response.json())
    .then((data) => { 
      if (data.verified === true) {
        window.localStorage.setItem('username', document.querySelector('#Username').value)
        navigate('/main/searchTrips')
      }
    })
    .catch(err => alert('Error creating user'));
  };

  function loginUser() {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        username: document.querySelector('#Username').value,
        password: document.querySelector('#Password').value,
      })
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.verified === true) {
        window.localStorage.setItem('username', document.querySelector('#Username').value)
        navigate('/main/searchTrips')
      }
    })
    .catch((err) => {
      console.log('Login page: user not found', err)
      })
  };

  return (
    <section className="loginSection">
      
      <header className="pageHeader">
        <h2>Welcome to Parks and Rec!</h2>
      </header>

      {/* username and password user input fields */}
      <article className="loginBox">
        <h3>Enter Your Account Details</h3>

        <div className="input">
          <label htmlFor="username"> Username:</label>
          <input
            className="inputField"
            id="Username"
            type="text"
            placeholder="Username"
          ></input>
        </div>

        <div className="input">
          <label htmlFor="password"> Password:</label>
          <input
            className="inputField"
            id="Password"
            type="password"
            placeholder="password"
          ></input>
        </div>
     
        {/* // submit and create user buttons */}
        <div className="ButtonContainer">
          <button
            type="button"
            value="CreateUser"
            onClick={createUser}
          >
            Create Account
          </button>

          <button
            type="submit"
            value="LoginUser"
            onClick={loginUser}
          >
            Login
          </button>
          </div>
      </article>
    </section>
  );
}

export default Login;