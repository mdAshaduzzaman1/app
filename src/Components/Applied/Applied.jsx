import React, { useEffect, useState } from 'react';


import Data from '../Data/Data';
import { getShoppingCart } from '../../Utilities/Utilities';
import { useLoaderData } from 'react-router-dom';

const Applied = () => {
    const [list, setList] = useState([])

 

const loaderData =useLoaderData()

useEffect(() => {
    const data = getShoppingCart();
    const newCart = loaderData
      .filter(loader => Object.keys(data).includes(loader.id))
      .map(loader => ({ ...loader, quantity: data[loader.id] }));
  
    if (newCart.length > 0) {
      setList(newCart);
    }
  }, [loaderData]);

  const remote =()=>{
    const remoteJobs = list.filter(job => job.location === "Remote");
const sortedRemoteJobs = remoteJobs.sort((a, b) => a.location.localeCompare(b.location));
  if (sortedRemoteJobs.length > 0) {
    setList(sortedRemoteJobs);
  }
  }
  const onsite=()=>{
    const remoteJobs = list.filter(job => job.location === "Onsite");
const sortedRemoteJobs = remoteJobs.sort((a, b) => a.location.localeCompare(b.location));
setList(sortedRemoteJobs)
  }
  

  
    return (
        <div className='text-center '>
            <h1 className=''>Applied Job</h1>
           <div className='d-flex gap-2 mt-5 align-items-center justify-content-center'>
           <button onClick={()=>onsite()} className='btn btn-outline-danger'>Onsite?</button>
            <button onClick={()=>remote()} className='btn btn-dark'>Remote</button>
           </div>
        {
            list.map(data => <Data data={data} ></Data>)
        }
        </div>
    );
};

export default Applied;