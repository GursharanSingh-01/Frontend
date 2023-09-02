import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import due from "./image/due.jpg";
import cutm from "./image/cutm.png";

const Login = () => {
  const history = useNavigate();

  const [username, setUsername] = useState(''); // Initialize with an empty string
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    if (username === 'Guru' && password === '1234') {
      // Simulate successful authentication
      history('/profile'); // Corrected the usage of history function
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
        <div className='body'>
      <div className='main'>
        <div className='tittle'>
          <img src={cutm} alt="cutm" className='cutm'/>
          <h1><i><u>Online</u></i></h1>
          <h2><i><u>No Due</u></i></h2>
        </div>
        <div className='sub'>
          <div className='due_b'>
            <img src={due} alt="due" className='due'/>
          </div>
          <div className='info'>
            <input type="text" placeholder="Username" className="name" value={username} onChange={handleUsernameChange} />
            <br />
            <input type="password" placeholder="Password" className="pass" value={password} onChange={handlePasswordChange} />
            <div className='login_button'>
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
