import React from 'react';
import './style.scss';
import { FaPhoneAlt } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

const ContactInfo = () => {
  return (
    <div className="contact-info-box">
        <h4>
            I will be happy to answer any question you may
            have about me or Full Stack web development.
        </h4>
        <div className="contact-option">
            <FaPhoneAlt/>
            <span className="text">
                +91 9064776248
            </span>
        </div>
        <div className="contact-option">
            <MdEmail/>
            <span className="text">
                rohitnandibmp@gmail.com
            </span>
        </div>
    </div>
  )
}

export default ContactInfo