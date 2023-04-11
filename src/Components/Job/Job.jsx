import React from 'react';

const Job = ({job}) => {
    
    return (
        <div className='border border-whitr) {
          
        } '>
        <img src={job.logo} alt="Error" />
          <h2>{job.name}</h2>  
          <p>Jobs Available {job.jobs_available}</p>
        </div>
    );
};

export default Job;