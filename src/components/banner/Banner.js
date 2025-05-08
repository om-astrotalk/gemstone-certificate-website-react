import React from 'react'
import "./banner.scss"
import { FaArrowRight } from 'react-icons/fa'
import BannerImage from "../../assets/AdobeStock_1190802328 (1).svg"
const Banner = () => {
  return (
    <div className='banner-wrapper'>
      <div className='banner-left'>
        {/* banner left */}
                <span className='premium'>
                    PREMIUM GEMSTONE CERTIFICATION
                </span>
                <div className='heading-wrapper'>
                                        <span>
                        Discover Your Gemstone's<span className='true-value'> True Value</span>
                        </span>
                </div>
                <p>
                    Expert certificationand and authentication backed by cutting edge technology and decades of gemological expertise.
                </p>

                <div className='custom-outline-button'>
                    Learn more
                    <FaArrowRight style={{ color: 'white'}} />
                </div>

      </div>

      <div className='banner-image'>
        {/* banner right */}
        <img src={BannerImage} />
      </div>




      
    </div>
  )
}

export default Banner
