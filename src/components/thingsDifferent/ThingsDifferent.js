import React from 'react';
import MainImage from '../../assets/AdobeStock_11763132051.png';
import './thingsDifferent.scss';

const bulletPoints = [
  {
    title: 'Continued Learning',
    description:
      'We believe knowledge is key. Our team always keeps learning about the latest advancements in gem testing through ongoing education and training, so we stay up-to-date.',
  },
  {
    title: 'Accuracy and Reliability',
    description:
      'We promise precise and trustworthy results you can depend on. We follow the best industry practices and use modern equipment to ensure your gems are identified and graded correctly every time.',
  },
  {
    title: 'Customer Satisfaction',
    description:
      'Making you happy is our top priority. We aim to meet your needs professionally, quickly, and with personal care, ensuring a smooth and positive experience.',
  },
  {
    title: 'Education and Empowerment',
    description:
      'We help you understand your gemstones better. By providing clear information, we help buyers and sellers make smart, informed choices, building trust and transparency in the gem industry.',
  },
];

const ThingsDifferent = () => {
  return (
    <div className="things-wrapper">
      <div className="image-section">
        <img src={MainImage} alt="things-different-image" />
      </div>

      <div className="content-section">
        <span className="premium">Gemological Laboratory</span>
        <span className="main-heading">Here's how we do <span className='true-value'>things differently.</span></span>
        <span className="subheading">
          At GTDGLI, we focus on these key areas to provide the best service:
        </span>

        <div className="bullet-points">
          {bulletPoints.map((point, idx) => (
            <div className="bullet-item" key={idx}>
              <span className="bullet-title">
                <span className="bullet-dot" />
                {point.title}
              </span>
              <p className="bullet-description">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThingsDifferent;
