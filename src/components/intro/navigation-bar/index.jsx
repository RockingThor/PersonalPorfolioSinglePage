import React from 'react'
import './style.scss';
import logo from '../../../images/logo.png';
import CallToAction from '../../shared/CallToAction';
import { scrollToAction } from '../../utils/helpers';

const Navigation = () => {
  return (
    <div className="top-navigation-bar">
        <div className="app-logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="navigation">
            <span className="navigation-item" onClick={()=>scrollToAction("skills")}>
                Skills
            </span>
            <span className="navigation-item" onClick={()=>scrollToAction("portfolio")}>
                Portfolio
            </span>
            <span className="navigation-item" onClick={()=>scrollToAction("blogs")}>
                Blog & Articles
            </span>
            <CallToAction text={'Contact Me'} action={()=>scrollToAction("contact")}/>
        </div>
    </div>
  )
}

export default Navigation;