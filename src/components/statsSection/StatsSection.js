import React from 'react';
import './statsSection.scss';
import { FaGem, FaUsers, FaAward } from 'react-icons/fa';

const StatsSection = () => {
  const stats = [
    {
      value: '5Lakhs+',
      label: 'GEMSTONE TESTED',
      icon: <FaGem className="icon" />
    },
    {
      value: '30+',
      label: 'PROFESSIONAL STAFF',
      icon: <FaUsers className="icon" />
    },
    {
      value: '15+',
      label: 'CERTIFIED GEMOLOGIST',
      icon: <FaAward className="icon" />
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-box">
          <div className="stats-content">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="stat-icon">{stat.icon}</div>
                <span className="stat-value">{stat.value}</span>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
