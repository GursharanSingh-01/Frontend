import React from 'react'
import './Form.css'
import cutm from "./image/cutm.png"
import { Link, useNavigate } from 'react-router-dom'


function Form() {
   const history = useNavigate();
 

 
   const handleSubmit = () => {
     // Use logical AND operator and conditional operator
     
        (history('/Status'))
      //   alert('Please fill in all requirements.');
   };
   
   
  return (
    
      <div className='main'>
         <div className='tittle'>
            <img src={cutm} alt="cutm" className='cutm'/>
            <h1><i><u>Online</u></i></h1>
            <h2><i><u>No Due</u></i></h2>
         </div>
         <div className='sub2'>
         <div className='menu2'>
            <h3><u>Menu</u></h3>
            <div className='button'>
            <Link to='/Profile'>
            <button>Profile</button>
            </Link>
            <Link to='/Approve'>
            <button>Approve</button>
            </Link>
            <Link to='/Signup'>
            <button>Logout</button>
            </Link>

            </div>
               <div className='form'>
               <h3><u>Apply No Due</u></h3>
                <h4>Name: <input type="text" placeholder="" className="add"/></h4>
                <h4>Mobile:<input type="text" placeholder="" className="add"/></h4>
                <h4>Regd No:<input type="text" placeholder="" className="add"/></h4>
                <h4>Program:<input type="text" placeholder="" className="add"/></h4>
                <h4>Batch:<input type="text" placeholder="" className="add"/></h4>
                <h4>Father's Name:<input type="text" placeholder="" className="add"/></h4>
                <h4>Father's Mobile:<input type="text" placeholder="" className="add"/></h4>
                <h4>Address:<input type="text" placeholder="" className="add"/></h4>
                
                <h4>Apply for:  
                  <select className="drop" id="">
                    <option value="Choose">Choose</option>
                    <option value="TC">TC</option>
                    <option value="CC">CC</option>
                  </select></h4>

                  <h4>Cause:<input type="text" placeholder="" className="cause"/></h4>
                  <h3><u>Application:</u></h3>
                  <h5>To, Pro-VC,</h5>
                  <h5>Sub: <input type="text" placeholder="Application" className="ap"/></h5>
                  <h5>Respected Sir,<input type="text" placeholder="Application" className="ap2"/></h5>
                  
                  <div className='submit_button'>
              <button onClick={handleSubmit}>Submit</button>
            </div>

               </div>
          </div>
         </div>
      </div>
    
  );
};

export default Form
