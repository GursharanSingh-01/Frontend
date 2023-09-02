import React from 'react'
import './Admin.css'
import cutm from "./image/cutm.png"

function Admin() {
  return (
    <div className='main'>
      <div className='tittle'>
            <img src={cutm} alt="cutm" className='cutm'/>
            <h1><i><u>Online</u></i></h1>
            <h2><i><u>No Due</u></i></h2>
         </div>
         <div className='sub3'>
         <div className='menu'>
            <h3><u>Menu</u></h3>
            <div className='button'>
            <button>Profile</button>
            <button>Apply No Due</button>
            <button>Logout</button>
            </div>

            <div className='content3'>
                <h3><u>Manage Authority</u></h3>
                <h4>Authoruity Name:<input type="text" placeholder="" className="add"/></h4>

                <h4>Deepandent Authority:  
                  <select className="drop" id="">
                    <option value="Choose">Choose</option>
                    <option value="NC">N/C</option>
                  </select></h4>
                  <div className='login_button2'>
            <button>Login</button>
                  </div>
                
            </div>

            </div>
        </div>
    </div>
  )
}

export default Admin
