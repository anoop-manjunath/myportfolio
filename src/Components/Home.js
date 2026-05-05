import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import profile from "../data/profile";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I&apos;M <b>{profile.name.toUpperCase()}</b></h1>
          <Typed/>
          <p className='HeroIntro'>{profile.home.intro}</p>
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>{profile.home.summary}</p>
        </div>
        <Tilt className='SpotlightTilt'>
          <div className='SpotlightCard'>
            <p className='SpotlightEyebrow'>{profile.role}</p>
            {profile.home.focus.map((item) => (
              <div className='SpotlightItem' key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
            <div className='SpotlightItem'>
              <span>Location</span>
              <strong>{profile.location}</strong>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  )
}

export default Home
