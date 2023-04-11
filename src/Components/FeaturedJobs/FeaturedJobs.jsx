import React, { useEffect, useState } from 'react';
import Featuredlist from '../FeaturedList/Featuredlist';
import { useLoaderData } from 'react-router-dom';

import Applied from '../Applied/Details';


const FeaturedJobs = () => {
    // const [featured, setFeatured] = useState([])
    const [cart, setCart] = useState([])

    const featured = useLoaderData()
    


    // useEffect(()=>{
    //     fetch('featured.json')
    //     .then(res => res.json())
    //     .then(data => setFeatured(data))
    // },[])

    // const handleCart = (id) => {
    //     const isExists = cart.find(d=>d.id === id);
    //     if(isExists && isExists !== undefined)
    //     {
    //       return
    //     }
    //     if(!isExists){
    //       const exists = featured.find((l) => l.id === id);
    //       if(exists)
    //       {
    //         setCart([exists])
    //       }
    //     }
      
    //   };


    return (
        <div>
            <h1>Featured Jobs</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus similique esse quasi magni.</p>
            
 
        {
          featured.map( data=> <Featuredlist key={data.id} list={data}></Featuredlist>)
     
        }
       {/* {
  cart.length > 0 && <Applied cart={cart}></Applied>
} */}

        
        </div>
    
    );
};

export default FeaturedJobs;