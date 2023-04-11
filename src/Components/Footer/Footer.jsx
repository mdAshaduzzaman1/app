import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-bg-light text-white p-5 mt-5'>
            <div className='d-flex mt-5 gap-5 justify-content-around text-center'>
        <div>
            <h1>Job Hunter</h1>
            <p>Lorem ipsum dolor, sit amet consectetur
                <br /> adipisicing elit. Dicta quibusdam quis Lorem <br /> ipsum dolor sit amet. officia.</p>

                {/* Logo */}
           
             <div>
             <img src="" alt="" /> 
            <img src="" alt="" />
            <img src="" alt="" />
            </div>

        </div>
        {/* ....... */}
        <div>
            <h2>Company</h2>
            <p>About Us</p>
            <p>Work</p>
            <p>Latest News</p>
            <p>Career</p>
        </div>
        <div>
            <h2>Products</h2>
            <p>Prototype</p>
            <p>Plans & Pricing</p>
            <p>Customers</p>
            <p>Intregration</p>
        </div>
        <div>
            <h2>Support</h2>
            <p>Help Desk</p>
            <p>Sales</p>
            <p>Become a Partner</p>
            <p>Devlopers</p>
        </div> 
        <div>
            <h1>Contact</h1>
            <p>524 Stokholmes, KKW</p>
            <p>+11-44-5564</p>
        </div>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
            <p>@2023 Job Hunter all right reserved</p>
            <p>Powered by Job-hunter</p>
        </div>
        </div>
        
    );
};

export default Footer;