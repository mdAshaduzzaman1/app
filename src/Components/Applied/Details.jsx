import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import Data from '../Data/Data';


const Details = (props) => {
 
 const location = useLocation()
 const data = location.state;
 console.log(data.remote)
  
    
    return (
        <div>
           <h2>Company name : {data.company_name}</h2>
        </div> 
    );
};

export default Details;
