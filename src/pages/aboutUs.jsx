import React from 'react'
import Layout from '../Layout'

import HeroSection from '../components/about-us/hero-section/HeroSection'
import TrustedExpertSection from '../components/about-us/trusted-expert/TrustedExpertSection'
import MissionSection from '../components/about-us/mission/MissionSection'



const About = () => {
  return (
    <Layout>
      <HeroSection/>
      <TrustedExpertSection/>
      <MissionSection/>
    </Layout>
  )
}

export default About
