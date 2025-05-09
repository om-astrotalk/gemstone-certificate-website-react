import React from "react";
import "./contactUs.scss";
import { FiMapPin, FiPhone, FiClock, FiMail } from "react-icons/fi";
// save the attached image as `contact-image.jpg` in the same folder
import ContactImage from "../../assets/contact.svg"
const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>CONTACT US</h2>
        <h3>GET IN TOUCH</h3>
        <p>
          We are a team of highly skilled gem-enthusiasts with expertise in each
          and every nuance related to gemology. With ever popular Nav-ratna and
          birthstone gems, today's market is witnessing a huge demand in
          contemporary jewelry studded with coloured gems as well for coming-of-age gem-lovers.
        </p>

        <div className="contact-item-wrapper">
          
          <div className="contact-item">
          <FiMapPin className="icon" />
          <div>
          <strong>OUR ADDRESS</strong>
            <p>
              Building No./Flat No.: 140<br />
              Mevka Road, Shanti Vihar<br />
              Sector 95, Gurugram, Haryana<br />
              PIN Code: 122505
            </p>
          </div>
           
          </div>
          <div className="contact-item">
          <FiPhone className="icon" />
          <div>
            <strong>PHONE NUMBER</strong>
            <p>01143102651</p>
          </div>
        </div>
        </div>

        
        <div className="contact-item-wrapper">
              <div className="contact-item">
                <FiClock className="icon" />
                <div>
                  <strong>WORKING HOURS</strong>
                  <p>Mon to Fri: 9am to 8pm</p>
                </div>
              </div>

              <div className="contact-item">
                <FiMail className="icon" />
                <div>
                  <strong>EMAIL ADDRESS</strong>
                  <p>gglab21@gmail.com</p>
                </div>
              </div>
          </div>
      </div>

      <div className="contact-right">
        <img src={ContactImage } alt="Contact" />
      </div>
    </div>
  );
};

export default ContactUs;
