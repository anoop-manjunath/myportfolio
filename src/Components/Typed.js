import React from 'react';
import Typewriter from  'typewriter-effect';
import profile from "../data/profile";

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: profile.titles,
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed:20,
        }}
      />
    </div>
  )
}

export default Typed
