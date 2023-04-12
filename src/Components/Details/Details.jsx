
import { addToDb } from '../../Utilities/h';
import './Details.css'
import {  useLocation } from 'react-router-dom';
// import { addToStorage } from '../../Utilities/Utilities';





const Details = () => {

 const location = useLocation()
 const data = location.state;
 console.log(data.id)





 const addToCart = (data) => {
    addToDb(data.id)
  };
  
 

 

    
    return (
        <div className='d-flex gap-3 justify-content-center flex-column'>
            <div className=' p-5 mt-5 text-center'>
                <h1>Job Details</h1>
            </div>
           <div className='job-container gap-3'>
            <div className='border border-white text-left ms-3 p-5'>
               <p className=''><span className='fw-bolder '>Job Description: </span>{data.description}</p> 
               <p>Job Responsibility: </p>
               <p><span className='fw-bolder'>Education: </span> {data.education} </p>

            </div>
            <div className='border border-white p-5 bg-secondary bg-opacity-10'>
                <h4>Job Details</h4>
                <hr />
                <p><span className='fw-bolder'>Salary: {data.salary} </span></p>
                <p><span className='fw-bolder'>Job Title: {data.title}</span></p>
                <h4>Contact Information</h4>
                <hr />

                <p><span className='fw-bolder'>Phone:</span> {data.contact.phone} </p>
                <p><span className='fw-bolder'>Email: </span> {data.contact.email}</p>
                <p><span className='fw-bolder'>Address: </span>{data.address}</p>
                <hr />
                <button onClick={()=>addToCart(data)} className='btn btn-info w-100'>Apply Now</button>
               
            </div>
            
           </div>
        </div> 
    );
};

export default Details;
