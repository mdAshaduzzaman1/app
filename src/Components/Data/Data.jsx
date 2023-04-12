import React from 'react';


const Data = ({data}) => {
  console.log(data)

    return (
        <div>
     
        <div className='mt-5 d-flex justify-content-center  justify-content-around '>
           <div className='d-flex'>
            <img src="{data.logo}" alt="df" />
            <div>
                <h3>{data.title}</h3>
                <h3>{data.company}</h3>
                <div>
                    <p>{data.location}</p>
                    
                </div>
                <div className='d-flex gap-3'>
                    <p>{data.address}</p>
                    <p>{data.salary}</p>
                </div>
            </div>
           </div>
           <button className='btn btn-danger h-25 w-25'>Details</button>
        </div>
        </div>
    );
};

export default Data;