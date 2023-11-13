import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Make sure you have the correct CSS file imported
import due from './image/due.jpg';
import cutm from './image/cutm.png';

const Signup = () => {
  const history = useNavigate();

  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Create a new user object
    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    try {
      // Send a POST request to your Spring backend API to add a new user
      const response = await fetch('http://localhost:8080/student/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.status === 200) {
        // Signup successful, navigate to profile or login page
        history('/profile');
      } else {
        // Handle signup failure, display an error message, etc.
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      // Handle any network errors or other exceptions here
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className='body'>
      <div className='main2'>
        <div className='tittle2'>
          <img src={cutm} alt='cutm' className='cutm' />
          <h1>
            <i>
              <u>Online</u>
            </i>
          </h1>
          <h2>
            <i>
              <u>No Due</u>
            </i>
          </h2>
        </div>
        <div className='sub2'>
          <div className='due_b'>
            <img src={due} alt='due' className='due' />
          </div>
          <div className='info2'>
            <input
              type='text'
              placeholder='Username'
              className='name2'
              value={name}
              onChange={handleUsernameChange}
            />
            <br />
            <input
              type='text'
              placeholder='Email'
              className='name2'
              value={email}
              onChange={handleEmailChange}
            />
            <br />
            <input
              type='password'
              placeholder='Password'
              className='pass2'
              value={password}
              onChange={handlePasswordChange}
            />
            <div className='Signup_button'>
              <button onClick={handleSignup}>Signup</button>
            </div>
            <div>
              <p className='link'>
                Already have an account? <a href='/login'>Login here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
