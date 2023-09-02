import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Make sure you have the correct CSS file imported
import due from "./image/due.jpg";
import cutm from "./image/cutm.png";

const Signup = () => {
    const history = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignup = () => {
    if (username && password) {
      // Simulate signup or registration logic
      history('/profile');
      console.log('Signup successful with username:', username);
    } else {
      alert('Please fill in both username and password.');
    }
  };

  return (
    <div className='body'>
      <div className='main2'>
        <div className='tittle2'>
          <img src={cutm} alt="cutm" className='cutm'/>
          <h1><i><u>Online</u></i></h1>
          <h2><i><u>No Due</u></i></h2>
        </div>
        <div className='sub2'>
          <div className='due_b'>
            <img src={due} alt="due" className='due'/>
          </div>
          <div className='info2'>
            <input type="text" placeholder="First Name" className="name2" value={username} onChange={handleUsernameChange} />
            <br />
            <input type="text" placeholder="Last Name" className="name2" />
            <br />
            <input type="text" placeholder="Email" className="name2" />
            <br />
            <input type="password" placeholder="Password" className="pass2" value={password} onChange={handlePasswordChange} />
            <div className='Signup_button'>
              <button onClick={handleSignup}>Signup</button>
            </div>
            <div>
               <p className='link'>
                Already have an account? <a href='/login'>Login here</a></p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
