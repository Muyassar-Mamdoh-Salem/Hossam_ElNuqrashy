import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from "../Components/Hero";
import Gallary from "../Components/Gallary";
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * A component that renders the homepage of the application.
 * It includes the NavBar, Hero, and Gallery components.
 * @returns {JSX.Element} The rendered homepage.
 */
/*******  3d605c71-e6b8-4506-97ba-8eb76215c5e4  *******/
const Home = () => {
  return (
    <div>
   
<NavBar/>
<Hero/>
<Gallary/>
        </div>
  )
}

export default Home