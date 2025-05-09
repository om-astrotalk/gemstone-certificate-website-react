import React from 'react';
import './TrustedSection.scss';
import TrustedImage from "../../../assets/AdobeStock_1041179916.png"

const TrustedExpertSection = () => {
  return (
    <section className="trusted-experts-section">
      <div className="container">
        <div className="content-grid">
          <div className="text-content">
            <div className="heading-wrapper">
            <span >Your Trusted <span className='true-value'>Gem Experts</span></span>
            </div>
            
            <p className="section-paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nam illo porro deserunt cumque explicabo sit exercitationem natus odit distinctio esse dolorem, dolores aut eos quam, laboriosam beatae itaque. Reiciendis.
            </p>
            <p className="section-paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, odio!
            </p>
            <p className="section-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi rerum dolore eos tempore veritatis impedit error, placeat voluptates, asperiores aperiam nemo adipisci neque mollitia iusto?
            </p>
            <p className="section-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quae, alias obcaecati accusamus at sed.
            </p>
            {/* <div className="custom-outline-button ">
             Contact Our Experts
            </div> */}
          </div>
          <div className="image-wrapper">
            <div className="image-gradient"></div>
            <div className="image-container">
              <img 
                src={TrustedImage} 
                alt="CrystalCert Experts" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedExpertSection;
