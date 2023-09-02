import React from 'react'
import './Status.css'
import cutm from "./image/cutm.png"

function Status() {
  return (
    <div className='main'>
      <div className='tittle'>
            <img src={cutm} alt="cutm" className='cutm'/>
            <h1><i><u>Online</u></i></h1>
            <h2><i><u>No Due</u></i></h2>
         </div>
         <div className='sub'>
         <div className='menu'>
            <h3><u>Menu</u></h3>
            <div className='button'>
            <button>Profile</button>
            <button>Apply No Due</button>
            <button>Logout</button>
            </div>

            <div className='content2'>
                <h3><u>Apply No Due</u></h3>
                
            </div>

            </div>
        </div>
    </div>
  )
}

export default Status
