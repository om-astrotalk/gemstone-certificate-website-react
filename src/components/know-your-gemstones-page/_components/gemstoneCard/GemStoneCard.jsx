import React, { useState } from 'react';
import './gemstoneCard.scss';
import { FaDiamond } from 'react-icons/fa6';
import image from "../../../../assets/gems/fireopal.png"

const GemstoneCard = ({ name, description, category }) => {
  const [open, setOpen] = useState(false);

  const getCategoryClass = (category) => {
    switch (category) {
      case 'precious':
        return 'badge-primary';
      case 'semi-precious':
        return 'badge-secondary';
      case 'rare':
        return 'badge-rare';
      default:
        return 'badge-default';
    }
  };

  return (
    <>
      <div className="gemstone-card">
        <div className="image-container">
          <img src={image} alt={name} />
          <span className={`badge ${getCategoryClass(category)}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
        <div className="content">
          <h3 className="title">
            <FaDiamond className="icon" />
            {name}
          </h3>
          <p className="description">{description}</p>
        </div>
      
          <button className="view-more" onClick={() => setOpen(true)}>
            View More
          </button>
        
      </div>

      {open && (
        <div className="gemstone-modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setOpen(false)}>
              &times;
            </button>
            <h2 className="modal-title">
              <FaDiamond className="icon" />
              {name}
            </h2>
            <div className="modal-body">
              <img src={image} alt={name} className="modal-image" />
              <div className="modal-text">
                <span className={`badge ${getCategoryClass(category)}`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GemstoneCard;
