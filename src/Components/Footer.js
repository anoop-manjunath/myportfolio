import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin, FaMedium} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"
import profile from "../data/profile";

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub/></a>
        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin/></a>
        <a href={profile.social.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium"><FaMedium/></a>
        <a href={profile.social.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><SiLeetcode/></a>
        <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram/></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer
