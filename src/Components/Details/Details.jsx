
import { addToDb } from '../../Utilities/Utilities';
import './Details.css'
import {  Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar,faCartArrowDown,faPhone,faMailBulk, faAddressBook  } from '@fortawesome/free-solid-svg-icons';







const Details = () => {

 const location = useLocation()
 const data = location.state;
console.log(data)





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
               <p>Job Responsibility: {
                data.responsibilities.map((res,index) =>{
                    return <li key={index}>{res}</li>
                })
                }</p>
               <p><span className='fw-bolder'>Education: </span> {data.education} </p>

            </div>
            <div className='border border-white p-5 bg-secondary bg-opacity-10'>
                <h4>Job Details</h4>
                <hr />
                <p><span className='fw-bolder'><FontAwesomeIcon icon={faDollar} /> Salary:{data.salary}</span></p>
                <p><span className='fw-bolder'><FontAwesomeIcon icon={faCartArrowDown} /> Job Title: {data.title}</span></p>
                <h4>Contact Information</h4>
                <hr />

                <p><span className='fw-bolder'><FontAwesomeIcon icon={faPhone} /> Phone:</span> {data.contact.phone} </p>
                <p><span className='fw-bolder'><FontAwesomeIcon icon={faMailBulk} /> Email: </span> {data.contact.email}</p>
                <p><span className='fw-bolder'><FontAwesomeIcon icon={faAddressBook} /> Address: </span>{data.address}</p>
                <hr />
                <Link to={'/success'}><button onClick={()=>addToCart(data)} className='btn btn-info w-100'>Apply Now</button></Link>
               
            </div>
            
           </div>
        </div> 
    );
};

export default Details;
