// Clean up the unused imports
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Container, Form, Button} from 'react-bootstrap'


// component for the whole login page
function Login(props) {
  let navigate = useNavigate();

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
    <Container style={{backgroundColor: 'hsl(0, 0%, 84%)'}} className='text-center border border-dark w-50 mt-5'>
    <header className='pageHeader pt-5'>
      <h2>Welcome to Outdoorsly!</h2>
    </header>
    <div className=' d-flex flex-column justify-content-center pb-5 px-5'>
      <Form.Group className='mb-3' controlId='UserName'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          id='Username'
          type='text'
          placeholder='Enter username'
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='Password'>
        <Form.Label>Password</Form.Label>
        <Form.Control id='Password' type='password' placeholder='Password' />
      </Form.Group>
      <div className='d-flex justify-content-center'>
        <Button
          onClick={createUser}
          // variant='primary'
          variant='dark'
          type='submit'
          className='mx-2'
        >
          Create Account
        </Button>
        <Button
          onClick={loginUser}
          variant='outline-success'
          type='submit'
          className='px-5 mx-2'
        >
          Login
        </Button>
      </div>
    </div>
  </Container>
    // <section className="loginSection">
      
    //   <header className="pageHeader">
    //     <h2>Welcome to Parks and Rec!</h2>
    //   </header>

    //   {/* username and password user input fields */}
    //   <article className="loginBox">
    //     <h3>Enter Your Account Details</h3>

    //     <div className="input">
    //       <label htmlFor="username"> Username:</label>
    //       <input
    //         className="inputField"
    //         id="Username"
    //         type="text"
    //         placeholder="Username"
    //       ></input>
    //     </div>

    //     <div className="input">
    //       <label htmlFor="password"> Password:</label>
    //       <input
    //         className="inputField"
    //         id="Password"
    //         type="password"
    //         placeholder="password"
    //       ></input>
    //     </div>
     
    //     {/* // submit and create user buttons */}
    //     <div className="ButtonContainer">
    //       <button
    //         type="button"
    //         value="CreateUser"
    //         onClick={createUser}
    //       >
    //         Create Account
    //       </button>

    //       <button
    //         type="submit"
    //         value="LoginUser"
    //         onClick={loginUser}
    //       >
    //         Login
    //       </button>
    //       </div>
    //   </article>
    // </section>
  );
}

export default Login;