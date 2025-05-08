import React from 'react';
import { FaGem, FaRegGem, FaCircle, FaArrowRight } from 'react-icons/fa';
import { ArrowRight } from 'react-icons/fa';
import "./certification.scss"
import Gem from "../../assets/gem 1.png"
import Diamond from "../../assets/Diamond Testing-image.png"
import Rudraksh from "../../assets/Rudraksh Testing-image.png"
const ServicesSection = () => {
  const services = [
    {
      icon: Gem,
      title: "Gemstone Testing",
      description: "It's important to test gemstones to tell the difference between natural ones (formed in the earth over a long time) and synthetic ones (made in labs). Our experts use special tools to check the gem's properties, like how it looks and reacts to light.",
      link: "#learn-more",
    },
    {
      icon: Diamond,
      title: "Diamond Testing",
      description: "Testing diamonds is key to knowing if a diamond is natural or lab-grown. Natural diamonds were formed deep inside the Earth millions of years ago. Lab-grown diamonds are made by scientists using special methods. We can tell them apart.",
      link: "#learn-more",
    },
    {
      icon: Rudraksh,
      title: "Rudraksh Testing",
      description: "Testing Rudraksha beads helps confirm if they are natural seeds from the Elaeocarpus tree or if they are man-made copies. Natural Rudraksha beads are important in culture and spirituality, so knowing they are real is vital...",
      link: "#learn-more",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="header">
          <h2>Our Certification Services</h2>
          <p>
            We provide industry-leading gemstone testing and certification services using the most advanced technologies available.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="icon-wrapper">
                <img src={service.icon}/>
                
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className="learn-more">
                Learn more
                  <FaArrowRight  />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
