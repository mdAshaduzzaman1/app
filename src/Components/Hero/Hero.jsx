import React from 'react';
import smile from '../../assets/smile.jpg'
const Hero = () => {
    return (
        <div className='d-flex flex-column flex-md-row mt-5 justify-content-center align-items-center gap-5'>
            <div className='text-center text-md-start'>
            <h1>One Step <br /> Closer To Your <br /> Dream Job</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero alias neque dicta! Distinctio, labore voluptas!</p>
        <button className='btn btn-primary'>Get Started</button>
            </div>
            <img className='img-fluid w-50' src={smile} alt="jj" />
      </div>
    );
};

export default Hero;