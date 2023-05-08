import React from 'react';
import NavbarLoggedin from '../components/NavbarLoggedin/NavbarLoggedin';
import Hero from '../components/Hero/Hero';
import AboutImg from "../assets/aboutHeroImg.jpg";
import AboutUs from '../components/AboutSubSection/AboutUs';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <>
    <NavbarLoggedin/>
    <Hero
      cName="hero-mid"
      heroImg={AboutImg}
      title="Improving lives through learning"
      subHeading = "Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge."
      // hide these buttons for hero of about section in hero.css (only needed in hero of home page)
      btnClass = "hide"
      searchBtnClass = "hide"
    />    
    <AboutUs/> 
    <Footer/>   
    </>

  );
}

export default About;
