import React from 'react';
import NavbarAdmin from '../components/NavbarAdmin/NavbarAdmin';
import Hero from '../components/Hero/Hero';
import HomeImg from "../assets/homeHeroImg.jpg";
import Footer from '../components/Footer/Footer';
import HomeSub from '../components/HomeSubSection/HomeSub';
import Testimonials from '../components/Testimonials/Testimonials'


const HomeAdmin = () => {
  return (
    <>
    <NavbarAdmin/>
    <Hero
      cName="hero"
      heroImg={HomeImg}
      title="Learning is what you make of it. Make it yours at Real Support Academy."
      searchBarText = "Search our 1000+ courses"
      searchBtnText = "Search"
      buttonText = "Explore all courses"
      url = "/admin/courses"
      btnClass = "show"
    />
    <HomeSub/>
    <Testimonials/>
    <Footer/>
    </>

  );
}

export default HomeAdmin;