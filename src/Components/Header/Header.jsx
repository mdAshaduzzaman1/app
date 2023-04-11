import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='mb-4 d-flex justify-content-between justify-content-center align-items-center'>
            <h1 className='fw-bolder'>Job Hunter</h1>
            <div className='d-flex gap-5'>
            <Link to='/'>Home</Link>
               <Link to="/statistics">Statistics</Link>
               <Link to="/applied">Applied Jobs</Link>
                <Link to="/blog">Blog</Link> 

            </div>
            <button className='btn btn-secondary'>Start Applying</button>
        </div>
    );
};

export default Header;