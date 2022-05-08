import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navigate, useNavigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

// basic login RENDER CHECK
// class Login extends Component {
//   render() { 
//   return(<h3>login component</h3>)
//   }
// }

// selecting the values of the Username and Password from Document
const username = document.querySelector('#Username').value;
const password = document.querySelector('#Password').value;

// component for the whole login page
class Login extends Component  {
  constructor(props) {
    super (props);
    this.state = {
      verified : false,
      userSaves: [],
    };
  }

  componentDidMount() {

  }

  // function activated when user clicks "create user"
  createUser() {
    let navigate = useNavigate();
    fetch('/db/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
        .then((res) => res.json())
        .then((data) => {
          if (data.verified === true) {
            if (!Array.isArray(data.userSaves)) userSaves = [];
            this.setState({verified:true, userSaves: data.userSaves})
            Navigate("/main", { state: {verified: this.state.verified, userSaves: this.state.userSaves}});
          }
        })
        .then(console.log('testing createUser in Login successful'))
        .catch((err) =>
          console.log('Login Page: createUser: ERROR: ', err)
      );
  };

  loginUser() {
    fetch('/db/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.verified === true) {
        <Navigate to={'/main'}/>
      }   
    })
    .then(console.log("Testing loginUser in Login"))
    .catch((err) => {
      console.log('Login page: user not found', err)
    })

  };

  render() {
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
}

export default Login;
