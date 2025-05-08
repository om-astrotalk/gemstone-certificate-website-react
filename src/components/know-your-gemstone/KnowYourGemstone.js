import React from 'react';
import Slider from 'react-slick';
import './KnowYourGemstone.scss';

import BlueSapphire from '../../assets/gems/ChatGPT Image May 5, 2025, 05_30_45 PM 1.png';
import Garnet from '../../assets/gems/garnet.png';
import Emerald from '../../assets/gems/emerald.png';
import Feroza from '../../assets/gems/feroza.png';
import Fireopal from '../../assets/gems/fireopal.png';

const gemstoneData = [
  { image: BlueSapphire, title: 'Blue Sapphire', description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.' },
  { image: Garnet, title: 'Garnet', description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.' },
  { image: Emerald, title: 'Emerald', description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.' },
  { image: Feroza, title: 'Feroza', description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.' },
  { image: Fireopal, title: 'Fire Opal', description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.' },
];

const KnowYourGemstone = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 1 },
          },
        ],
      };

  return (
    <div className="gemstone-wrapper">
      <span className="premium">High quality Services</span>
      <h2 className="main-heading">
        Know Your <span className="true-value">Gemstone</span>
      </h2>

      <Slider {...settings} className="gemstone-carousel">
        {gemstoneData.map((gem, index) => (
          <div key={index} className="gemstone-card">
            <img src={gem.image} alt={gem.title} className="gemstone-img" />
            <h3 className="gemstone-title">{gem.title}</h3>
            <p className="gemstone-desc">{gem.description}</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default KnowYourGemstone;
