import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';


const Jobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
            <h1>Job Category List</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iusto!</p>
            <div className='d-flex align-items-center flex-column flex-sm-row justify-content-center mt-5 gap-4'>
            {
                
                jobs.map(data =>  <Job key={data.jobs_available} job ={data}></Job>)
            }
            </div>
        </div>
    );
};

export default Jobs;