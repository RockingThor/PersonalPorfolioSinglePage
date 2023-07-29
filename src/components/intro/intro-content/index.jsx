import './style.scss';
import React from 'react';
import hand from '../../../images/hand.png';
import CallToAction from '../../shared/CallToAction';
import girl from '../../../images/girl.png'
import { BsAwardFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

const IntroContent = () => {
  return (
    <div className="intro-content">
        <div className="layout">
            <div className="left-col">
                <h1 className="title">
                    <span className="small-text">
                        <span className="text">
                            Hello
                        </span>
                        <span className="icon">
                            <img src={hand} alt='hand icon' />
                        </span>
                        <span className="text">,I Am</span>
                    </span>
                    <span className="big-text">
                        Rohit Nandi
                    </span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim consequatur voluptatum magni
                    unde ullam expedita repudiandae sed, hic omnis aspernatur perspiciatis tenetur, in odio delectus
                    debitis! Voluptates repellat eveniet distinctio.
                </p>
                <CallToAction text={'Contact me'}/>
            </div>
            <div className="right-col">
                <img src={girl} alt='profile' />
                <div className="highlights horizontal">
                    <div className="icon">
                        <BsAwardFill/>
                    </div>
                    <div className="text">
                        Best Design Award
                    </div>
                </div>
                <div className="highlights verticle">
                    <div className="icon">
                        <FaUser/>
                    </div>
                    <div className="text">
                        <span>4k+</span>
                        Happy customers
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IntroContent;