import React from 'react'
import './App.css'
import Navebar from './components/Navebar'
import Home from './components/Home';
import Home1 from './components/Home1';
import Property from './components/Property';
import Cards from './components/Cards';
import SecondP2 from './components/SecondP2';
import Review from './components/Review';
import Footer from './components/Footer';


const App = ()=>
{
  return(
    <>
    < Navebar/>
    < Home/>
    < Home1/>
    <Property/>
    <Cards/>
    <SecondP2/>
    <Review/>
    <Footer/>
    </>
  )

}
export default App;
