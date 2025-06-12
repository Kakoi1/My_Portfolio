import React from 'react';
import './Contact.css';
import { BsEnvelopeArrowUp } from "react-icons/bs";
import MapComponent from './MapComponent';
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-form">
          <h2>Let's Talk</h2>
          <form>
            <div className='formWrapper'>
                <div className="form-row">
                <input type="text" placeholder="Last Name" className="input-field" />
                <input type="text" placeholder="First Name" className="input-field" />
                </div>
                <input type="email" placeholder="Email" className="input-field full-width" />
                <input type="tel" placeholder="Phone Number" className="input-field full-width" />
                <textarea placeholder="Message" className="input-field full-width textarea"></textarea>
                <button type="submit" className="submit-button">Send me a message <BsEnvelopeArrowUp /></button>
            </div>
          </form>
        </div>
        <div className="contact-info">
          <div className="map-placeholder">
            <MapComponent/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;