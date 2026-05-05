import React from 'react';

const ProjectBox = ({ eyebrow, title, meta, description }) => {
  return (
    <article className='projectBox experienceCard'>
      <p className='cardEyebrow'>{eyebrow}</p>
      <h3>{title}</h3>
      <p className='cardMeta'>{meta}</p>
      {description ? <p>{description}</p> : null}
    </article>
  )
}

export default ProjectBox
