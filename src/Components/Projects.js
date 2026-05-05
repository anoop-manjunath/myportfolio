import React from 'react';
import ProjectBox from './ProjectBox';
import profile from "../data/profile";

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>Experience <b>& Credentials</b></h1>
      <p className='projectIntro'>
        A snapshot of the roles, delivery contexts, and certifications that shape how I build dependable backend systems.
      </p>
      <div className='project'>
        {profile.experience.map((item) => (
          <ProjectBox
            key={`${item.company}-${item.period}`}
            eyebrow={item.period}
            title={item.company}
            meta={item.title}
          />
        ))}
      </div>
      <h2 className='projectHeading projectHeadingSecondary'>Certifications</h2>
      <div className='project'>
        {profile.certifications.map((item) => (
          <ProjectBox
            key={`${item.name}-${item.year}`}
            eyebrow={item.year}
            title={item.name}
            meta={item.issuer}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
