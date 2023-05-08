import React, { useState } from 'react';
import NavbarLoggedin from '../components/NavbarLoggedin/NavbarLoggedin';
import Hero from '../components/Hero/Hero';
import CourseHeroImg from "../assets/coursesHeroImg.jpg";
import Footer from '../components/Footer/Footer';
import CourseSubSection from '../components/CoursesSectionLoggedIn/CourseSubSection';


const Courses = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
    <NavbarLoggedin/>
    <Hero
      setSearchResults={setSearchResults} 
      showSearchBar={true}
      cName="hero-mid2"
      heroImg={CourseHeroImg}
      title="Explore our courses"
      searchBarText = "What do you want to learn?"
      searchBtnText = "Search"
      buttonText = "Explore all courses"
      btnClass="hide" 
    />
    <CourseSubSection
      searchResults={searchResults}
    />
    <Footer/> 
    </>

  );
}

export default Courses;
