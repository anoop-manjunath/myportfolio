import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';
import profile from "../data/profile";

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          {profile.about.paragraphs.map((paragraph) => (
            <p className='AboutParagraph' key={paragraph}>{paragraph}</p>
          ))}

          <div className='AboutSection'>
            <h2 className='AboutSectionTitle'>Education</h2>
            <p>
              <b>{profile.about.education.degree}</b><br />
              {profile.about.education.institution} - {profile.about.education.year}
            </p>
          </div>

          <div className='AboutSection'>
            <h2 className='AboutSectionTitle'>Open To</h2>
            <div className='AboutBadgeRow'>
              {profile.about.openTo.map((item) => (
                <span className='AboutBadge' key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className='AboutSection'>
            <h2 className='AboutSectionTitle'>Specializations</h2>
            <div className='AboutList'>
              {profile.about.specializations.map((item) => (
                <p key={item.label}>
                  <b>{item.label}:</b> {item.value}
                </p>
              ))}
            </div>
          </div>

          <div className='AboutSection'>
            <h2 className='AboutSectionTitle'>Writing</h2>
            <p>
              I also share longer-form notes and engineering perspectives on{" "}
              <a href={profile.social.medium} target="_blank" rel="noopener noreferrer">Medium</a>.
            </p>
          </div>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        {profile.skills.map((skill) => (
          <Skills key={skill} skill={skill} />
        ))}
      </div>
    </>
  )
}

export default About
