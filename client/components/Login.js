import React, {useState, Component} from 'react';
import ReactDOM from 'react-dom';
import { Navigate, useNavigate, Link, withRouter } from 'react-router-dom';

// component for the whole login page
const Login = () => {
  const [value, setValue] = useState({
    verified : false,
    tripsArray: [],
  });

  // function activated when user clicks "create user"
  const createUser = () => {
    console.log('test createUser Button')
    let navigate = useNavigate();
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
        .then((res) => res.json())
        .then((data) => {
          if (data.verified === true) {
            if (!Array.isArray(data.tripsArray)) userSaves = [];
            setValue({verified:true, tripsArray: data.tripsArray})
            navigate("/main", { state: {verified: this.state.verified, tripsArray: this.state.tripsArray}});
          }
        })
        .catch((err) =>
          console.log('Login Page: createUser: ERROR: ', err)
      );
  };

  const loginUser = () => {
    setValue({verified:true, tripsArray: [{'hello': 'test'}]})
    navigate("/main", { state: {verified: this.state.verified, tripsArray: this.state.tripsArray}});
    // console.log('test loginUser Button')
    // let navigate = useNavigate();
    // fetch('/db/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'Application/JSON',
    //   },
    //   body: JSON.stringify({
    //     username: document.querySelector('#Username').value,
    //     password: document.querySelector('#Password').value,
    //   })
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //     if (data.verified === true) {
    //       if (!Array.isArray(data.tripsArray)) userSaves = [];
    //       setValue({verified:true, tripsArray: data.tripsArray})
    //       navigate("/main", { state: {verified: this.state.verified, tripsArray: this.state.tripsArray}});
    //     }
    //   })
    // .catch((err) => {
    //   console.log('Login page: user not found', err)
    // })
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
            onClick={Login.createUser}
          >
            Create Account
          </button>

          <button
            type="submit"
            value="LoginUser"
            onClick={Login.loginUser}
          >
            Login
          </button>
        </div>
      </article>
    </section>
  );
}

export default Login;




// basic login RENDER CHECK
// class Login extends Component {
//   render() { 
//   return(<h3>login component</h3>)
//   }
// }