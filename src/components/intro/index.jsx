import React from 'react';
import './style.scss';
import cloud from '../../images/cloud.png';
import cloudSoft from '../../images/cloud-soft.png';
import Navigation from './navigation-bar';

const Intro = () => {
  return (
    <div className="Intro-section">
      <div className="vector-bg" id="parallax">

      </div>
        <img src={cloud} alt="cloud" className='cloud' />
        <img src={cloudSoft} alt="cloud-soft" className="cloud-soft" />
        <div className="content">

        </div>
        <Navigation/>
    </div>
  )
}

export default Intro;