// Clean up the unused imports
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Link, withRouter } from 'react-router-dom';
import Main from './Main.js';

// component for the whole login page
function Login(props) {

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
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        username: document.querySelector('#Username').value,
        password: document.querySelector('#Password').value,
      })
    })
        .then((resp) => resp.json())
        .then((data) => {
          console.log('Create User Response', data)
      // update our state with the hooks we defined earlier
      setUserTrips(data.tripsArray)    
      setUsername(document.querySelector('#Username').value)
      setVerified(data.verified)
      window.localStorage.setItem('username', document.querySelector('#Username').value)
      })
        .catch((err) =>
          console.log('Login Page: createUser: ERROR: ')
          // console.log('Login Page: createUser: ERROR: ', err.message)
    );
  };

  function loginUser() {
// query our databse to see if their username and password is correct
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
    .then((resp) => resp.json())
    .then((data) => {
      console.log('Login User Response', data)
      // update our state with the hooks we defined earlier
      setUserTrips(data.tripsArray);
      setUsername(document.querySelector('#Username').value);
      setVerified(data.verified);

      // Set Username in Local Storage
      window.localStorage.setItem('username', document.querySelector('#Username').value)
      })
    .catch((err) => {
      console.log('Login page: user not found', err)
      })
  };

  console.log('login page  ', verified, userTrips)

  // declare navigate so we can use it as a hook in useEffect
  const navigate = useNavigate();
    useEffect(() => {
      const goToMainPage = () => navigate(('/main/searchTrips'), {state: { verified, userTrips, username}});
      const goToError = () => navigate(('/error'));
      if (verified === true){ goToMainPage()}
      if (verified === false){ goToError()}
    }, [verified]);

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