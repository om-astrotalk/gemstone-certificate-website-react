import React from 'react';
import './missionSection.scss';
import { FaCheck, FaUsers, FaFileAlt, FaAward } from 'react-icons/fa';

const MissionSection = () => {
  const missions = [
    {
      title: 'Accurate Grading',
      description:
        'Check and grade your gemstones accurately and reliably, following the best industry methods.',
      icon: <FaCheck size={24} />,
    },
    {
      title: 'Superior Service',
      description:
        'Offer great customer service, helping each client quickly and professionally.',
      icon: <FaUsers size={24} />,
    },
    {
      title: 'Education',
      description:
        'Teach our clients about gemstones – how to identify them, understand their quality, and know their value. This helps you make smart choices.',
      icon: <FaFileAlt size={24} />,
    },
    {
      title: 'Integrity',
      description:
        'Always work with honesty, high standards, and strong ethics in everything we do.',
      icon: <FaAward size={24} />,
    },
  ];

  return (
    <section className="mission-section">
      <div className="container">
        <div className="wrapper">
          <div className="section-header">
             <div className="heading-wrapper">
                <span>Our <span>Mission</span></span>
                </div>   
            
            <div className="underline" />
          </div>
          <p className="intro-text">At GemVerify, we aim to:</p>
          <div className="mission-grid">
            {missions.map((mission, index) => (
              <div key={index} className="mission-card">
                <div className="icon-wrapper">{mission.icon}</div>
                <div className="text">
                  <span>{mission.title}</span>
                  <p>{mission.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
