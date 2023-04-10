import React from 'react';

const Header = () => {
    return (
        <div className='d-flex justify-content-between justify-content-center align-items-center'>
            <h1 className='fw-bolder'>Job Hunter</h1>
            <div className='d-flex gap-5'>
                <a href="">Statistics</a>
                <a href="">Applied Jobs</a>
                <a href="">Blog</a>
            </div>
            <button className='btn btn-secondary'>Start Applying</button>
        </div>
    );
};

export default Header;