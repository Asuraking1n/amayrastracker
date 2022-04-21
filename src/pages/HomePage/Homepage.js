import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './homepage.css'

const Homepage = () => {

  return (
    <>
        <Navbar/>
        <div className="homepage-cont">
          <div className="hompage-quote">
          Build Golden Habits, Unlock your Potential 
          </div>
          <div className="homepage-summary">
          Focus on what truly matters with <span>Amayra</span>. Build the best version of yourself by mastering your habits.
          </div>
          <div className="random-quotes">
            <q>It does not matter how slowly you go as long as you do not stop.</q>
          </div>
        </div>
    </>
  )
}

export default Homepage