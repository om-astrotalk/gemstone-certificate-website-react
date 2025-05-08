import React from 'react';
import Slider from 'react-slick';
import './customerTestimonial.scss';
import DoubleComma from '../../assets/DoubleComma.svg';
import Dummy from '../../assets/testimonial-images/dummy.png';

const testimonialData = [
  {
    name: 'John Doe',
    subtitle: 'Jewelry Designer',
    image: Dummy,
    feedback: 'GTDGLI’s reports are accurate and reliable. Their team is always supportive and professional.',
  },
  {
    name: 'Emily Smith',
    subtitle: 'Gem Dealer',
    image: Dummy,
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod justo in massa mattis tincidunt.',
  },
  {
    name: 'Carlos Martinez',
    subtitle: 'Retailer',
    image: Dummy,
    feedback: 'Their technology-driven approach makes gemstone authentication seamless and trustworthy.',
  },
  {
    name: 'Sophia Zhang',
    subtitle: 'Custom Jeweler',
    image: Dummy,
    feedback: 'The reports are comprehensive and presented clearly. I highly recommend their services.',
  },
  {
    name: 'Liam Patel',
    subtitle: 'Collector',
    image: Dummy,
    feedback: 'CrystalCert is my go-to for gemstone validation. Their expertise is unmatched.',
  },
];

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const CustomerTestimonial = () => {
  return (
    <div className="wrapper">
      <span className="premium">Testimonials</span>
      <h2 className="main-heading">
        What Our <span className="true-value">Clients Say</span>
      </h2>
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div style={{ position: 'relative' }}>
            <div key={index} className="card-wrapper">
              <div className="image-wrapper">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonials">
                <span className='testimonial-name'>{testimonial.name}</span>
                <span className='testimonial-subtitle'>{testimonial.subtitle}</span>
                <p>{testimonial.feedback}</p>
              </div>
              <div className="comma-wrapper">
                <img src={DoubleComma} alt="comma" />
              </div>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerTestimonial;
