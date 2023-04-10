import React from 'react';
import smile from '../../assets/smile.jpg'
const Hero = () => {
    return (
        <div className='d-flex mt-5 justify-content-center align-items-center'>
            <div>
            <h1>One Step <br /> Closer To Your <br /> Dream Job</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero alias neque dicta! Distinctio, labore voluptas!</p>
        <button className='btn btn-primary'>Get Started</button>
            </div>
            <img className='w-50' src={smile} alt="jj" />
      </div>
    );
};

export default Hero;