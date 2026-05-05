import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Devansh Sahni</h4>
      <h4>Copyright &copy; 2023 DS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/DevanshSahni" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/devansh-sahni/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        <a href="mailto:devanshsahni@gmail.com"><GrMail/></a>
        <a href="https://leetcode.com/sahni1403/" target="_blank" rel="noopener noreferrer"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer
