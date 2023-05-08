import React from 'react';
import NavbarLoggedin from '../components/NavbarLoggedin/NavbarLoggedin';
import Hero from '../components/Hero/Hero';
import MyCoursesHeroImg from "../assets/MyCoursesHeroImg.jpg";
import Footer from '../components/Footer/Footer';
import MyCoursesSubSection from '../components/MyCoursesSubSection/MyCoursesSubSection';


const MyCourses = () => {
  return (
    <>
    <NavbarLoggedin/>
    <Hero
      cName="hero-mid2"
      heroImg={MyCoursesHeroImg}
      title="My Courses"
      // hide these buttons for hero of about section in hero.css (only needed in hero of home page)
      btnClass = "hide"
      searchBtnClass = "hide"
    />
    <MyCoursesSubSection
      courseName="Managing Cloud Storage"
      courseLessons="12"
      courseDifficulty="Hard"
      courseEnrolDate="12-04-2023"
    />
    <Footer/>
    </>
  );
}

export default MyCourses;
