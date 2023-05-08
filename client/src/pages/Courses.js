import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import CourseHeroImg from "../assets/coursesHeroImg.jpg";
import Footer from '../components/Footer/Footer';
import CourseSubSection from '../components/CoursesSection/CourseSubSection';


const Courses = () => {
  const [searchResults, setSearchResults] = useState([]);


  return (
    <>
    <Navbar/>
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
