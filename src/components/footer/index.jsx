import React from 'react';
import './style.scss';
import Section from '../shared/section';
import Logo from '../../images/logo.png';
import { FaGithub, FaLinkedin, FaQuora} from 'react-icons/fa';
import { scrollToAction } from '../utils/helpers';
import SocialIcon from './social-icon';

const Footer = () => {
  return (
    <Section background='dark' className='footer'>
        <div className="footer-content-wrapper">
            <div className="footer-logo">
                <img src={Logo} alt="logo" />
            </div>
            <ul className="footer-menu-items">
                <li className="footer-menu-item" onClick={()=>scrollToAction("skills")}>
                    Skills
                </li>
                <li className="footer-menu-item" onClick={()=>scrollToAction("portfolio")}>
                    Portfolio
                </li>
                <li className="footer-menu-item" onClick={()=>scrollToAction("blogs")}>
                    Blogs & Articles
                </li>
                <li className="footer-menu-item" onClick={()=>scrollToAction("contact")}>
                    Contact Me
                </li>
            </ul>
            <div className="social-icons">
                <SocialIcon color='#0D2636' icon={<FaGithub/>} link='https://github.com/RockingThor'/>
                <SocialIcon color='#0A66C2' icon={<FaLinkedin/>} link='https://www.linkedin.com/in/rohitnandi/'/>
                <SocialIcon color='#FF0000' icon={<FaQuora/>} link='https://www.quora.com/profile/Rohit-Nandi-14'/>
            </div>
            <div className="bottom-bar">
                <div className="copyright-text">
                    Copyright 2023 Rohit Nandi | All Rights Reserved
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Footer;