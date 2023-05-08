import React, { useState } from 'react';
import NavbarAdmin from '../components/NavbarAdmin/NavbarAdmin';
import Hero from '../components/Hero/Hero';
import CourseHeroImg from "../assets/coursesHeroImg.jpg";
import Footer from '../components/Footer/Footer';
import CourseSubSection from '../components/CoursesSectionAdmin/CourseSubSection';


const CoursesAdmin = () => {
  const [searchResults, setSearchResults] = useState([]);
  
  return (
    <>
    <NavbarAdmin/>
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

export default CoursesAdmin;
