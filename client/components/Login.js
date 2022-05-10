import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, Link, withRouter } from 'react-router-dom';
import Main from './Main.js';

// component for the whole login page
function Login(props) {

  // establish our state
  const [verified, setVerified] = useState();
  const [userTrips, setUserTrips] = useState([]);
  const [username, setUsername] = useState('default');

  // function activated when user clicks "create user"
  function createUser() {

    fetch('/db/add', {
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
      // update our state with the hooks we defined earlier
      setUserTrips(data.tripsArray)    
      setUsername(document.querySelector('#Username').value)
      setVerified(data.verified)
      })
        .catch((err) =>
          console.log('Login Page: createUser: ERROR: ', err)
    );
  };

  function loginUser() {
// query our databse to see if their username and password is correct
    fetch('/db/login', {
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
      // update our state with the hooks we defined earlier
      setUserTrips(data.tripsArray);
      setUsername(document.querySelector('#Username').value);
      setVerified(data.verified);
      })
    .catch((err) => {
      console.log('Login page: user not found', err)
      })
  };

  console.log('login page  ', verified, userTrips)

  // declare navigate so we can use it as a hook in useEffect
  const navigate = useNavigate();
    useEffect(() => {
      const goToMainPage = () => navigate(('/main'), {state: { verified, userTrips, username}});
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