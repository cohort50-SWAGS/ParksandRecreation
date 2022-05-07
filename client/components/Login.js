// after lunch: complete fetch requests of what we want to do when we get the data back from our internal server(our backend) -
// likely going to route to our main page if success
// maybe an alert if the username/password wasn't valid and prompt to create an account?

import React from 'react';

// selecting the values of the Username and Password from Document
const username = document.querySelector('#Username').value;
const password = document.querySelector('#Password').value;

// component for the whole login page
function Login() {
  // function activated when user clicks "create user"
  const createUser = () => {
    fetch('/db/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        username,
        password,
      })
    }).then(
      if (res.locals.verified === true)
      <route exact /main
      )
  };

  // function activated when user clicks "Login"
  const loginUser = () => {
    fetch('/db/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
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
          <input
            id="CreateUser"
            type="submit"
            value="CreateUser"
            onClick={createUser}
          >
            Create Account
          </input>

          <input
            id="LoginUser"
            type="submit"
            value="LoginUser"
            onClick={loginUser}
          >
            Login
          </input>
        </div>
      </article>
    </section>
  );
}

export default Login;
