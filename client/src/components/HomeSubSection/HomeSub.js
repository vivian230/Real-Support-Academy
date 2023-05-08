import React from 'react';
import './homeSub.css'
import Logo from "../../assets/logo.png";

const HomeSub = () => {
  return (
    <div className="about-us-container">
        <div className="text"> 
        <div className="homeimg">
            <img alt="Logo" src={Logo}/>
        </div>
            <h1>Learn and Grow</h1>
                <p>Your Real Support Academy learning experience is grounded in cutting edge cognitive science. With more than two dozen distinct learning features to help you achieve your goals, our approach follows three key principles:</p>
            <h2>Experience</h2>
                <p>Learn new knowledge and skills in a variety of ways, from engaging video lectures and dynamic graphics to data visualizations and interactive elements.</p>
            <h2>Practice</h2>
                <p>Demonstrating your knowledge is a critical part of learning. Real Support Academy courses and programs provide a space to practice with quizzes, open response assessments, virtual environments, and more.</p>
            <h2>Apply</h2>
                <p>Learning on Real Support Academy transforms how you think and what you can do, and translates directly into the real world—immediately apply your new capabilities in the context of your job.</p> <br></br>
            <h2> Stories written with personal experience by Students:</h2>
        </div>
       
        
    </div>
  );
}

export default HomeSub;