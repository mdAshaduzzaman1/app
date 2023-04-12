import React from 'react';

const Job = ({job}) => {
    
    return (
        <div className='border border-white gap-2 d-flex flex-column align-items-center justify-content-between gap-3'>
        <img className='img-fluid w-50 h-50' src={job.logo} alt="Error" />
          <h2>{job.name}</h2>  
          <p>Jobs Available {job.jobs_available}</p>
        </div>
    );
};

export default Job;