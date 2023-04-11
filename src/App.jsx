import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Jobs from './Components/Joblist/Jobs';
import FeaturedJobs from './Components/FeaturedJobs/FeaturedJobs';



const App =() => {
 
  return (
    <div className="App">
      
      <Hero></Hero>
      <Jobs></Jobs>
      <FeaturedJobs></FeaturedJobs>
    </div>
  )
}
export default App;


