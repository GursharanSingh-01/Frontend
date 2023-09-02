import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom'; // Import the Link component
import cutm from './image/cutm.png';

function Profile() {
  return (
    <div className='main'>
      <div className='tittle'>
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
      <div className='sub'>
        <div className='menu'>
          <h3>
            <u>Menu</u>
          </h3>
          <div className='button'>
            {/* Add path attributes to buttons using the Link component */}
            <Link to='/Status'>
              <button>Approve</button>
            </Link>
            <Link to='/Form'>
              <button>Apply No Due</button>
            </Link>
            <Link to='/Login'>
              <button>Logout</button>
            </Link>
          </div>
          <div className='content'>
            <h3>
              <u>Welcome</u>
            </h3>
            <h4>Registration No:</h4>
            <h4>Father's Name:</h4>
            <h4>Department:</h4>
            <h4>Mobile:</h4>
            <h4>Email:</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
