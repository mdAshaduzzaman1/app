import React from 'react'

import './App.css'
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Jobs from './Components/Joblist/Jobs';



const App =() => {
 
  return (
    <div className="App">
      
      <Hero></Hero>
      <Jobs></Jobs>
    </div>
  )
}
export default App;


