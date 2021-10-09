// import logo from './logo.svg';
import './App.css';
//import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
//import Productadd from './components/Productadd/productadd';
import Carousel from './components/Carousel/carousel';



function App() {

  return (

<div className="app">
    <Navbar/>
    {/* <Productadd/> */}
    <Carousel/>
  
</div>
  )
}

export default App;