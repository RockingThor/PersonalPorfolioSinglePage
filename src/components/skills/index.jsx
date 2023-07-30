import React from 'react';
import './style.scss';
import Section from '../shared/section';
import techImage from '../../images/tech-icons.png';
import CallToAction from '../shared/CallToAction';
import {AiOutlineCloudDownload} from 'react-icons/ai';

const Skills = () => {
  return (
    <Section background='dark' id='skills'>
        <div className="skills-content-wrapper">
            <div className="left-col">
                <img src={techImage} alt="js,react" />
            </div>
            <div className="right-col">
                <h2>Skills</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Quos consequuntur ea, iusto tenetur harum quis nihil distinctio 
                    veritatis assumenda modi dignissimos quibusdam nemo est ex accusantium 
                    voluptate reprehenderit nulla! A?
                </p>
                <CallToAction text="Download CV" icon={<AiOutlineCloudDownload/>}/>
            </div>
        </div>
    </Section>
  )
}

export default Skills;