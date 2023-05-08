import React from 'react';
import "./aboutUs.css";
import Target from "../../assets/target.png";
import Progress from "../../assets/progress.png";
import Quiz from "../../assets/quiz.png";
import Feedback from "../../assets/feedback.png";

const AboutUs = () => {
  return (
    <div className="History">
      <h1>Our History</h1>
      <p>RS-academy is committed to providing top-quality online education and training to individuals from socially disadvantaged backgrounds. Our target audience includes ethnic minorities, refugees, and people with limited technological backgrounds. By using our web portal, these groups will have access to educational resources that will help them advance their education, thereby increasing their chances of securing better employment opportunities. Our goal is to help disadvantaged individuals integrate into society by providing them with the tools and resources they need to succeed. Choose us because we are dedicated to helping you achieve your educational and career goals, and we believe that everyone deserves a chance to thrive.</p>
      <div className='Mission'>
        <div className='missionText'>
        <h2>Our Mission</h2>
        <p>We are a committed to empowering the most vulnerable members of society. Our focus is on providing top-quality online education and training to those from socially disadvantaged backgrounds, including ethnic minorities, refugees, and those with limited access to technology. By offering these individuals the tools they need to succeed, we are helping to create a more educationally enriched path and opening up countless employment opportunities for the future. Our ultimate goal is to facilitate the integration of disadvantaged individuals into society and provide them with the support they need to progress and thrive in a world that often excludes them.</p>
        </div>
        <div className='image'>
        <img className='img1' alt="img" src={Target}/>
        <img className='img2' alt="img" src={Progress}/>
    </div>
    </div>
    <div className='How?'>
      <h2>How do we do this?</h2>
      <p>They will learn new knowledge and skills in a variety of ways, from engaging video lectures and dynamic graphics to data visualizations and interactive elements. We believe demonstrating your knowledge is a critical part of learning. Real Support Academy courses and programs provide a space to practice with quizzes, open response assessments, virtual environments, and more.
      When learners are presented with different types of learning materials, such as videos, graphics, and interactive elements, they are more likely to stay engaged and interested in the content. This can lead to better retention of information and a more positive learning experience.
      </p>
    </div>
    <div className='imag'>
        <img alt="img" src={Quiz}/>
    </div>
    <div className='feedback'>
      
      <h2>We want to hear from you too!</h2>
      <p> At our organization, we hold feedback in the highest regard, recognizing it as an essential driver of our continued growth and success. We understand that the feedback of our users is an invaluable tool that enables us to continually improve and enhance the services we provide. We are deeply committed to offering all users of our platform the opportunity to voice their thoughts and opinions through our feedback system. We value each and every piece of feedback we receive and take it seriously, using it to make the necessary changes to improve the user experience. Through our feedback system, we provide a safe and inclusive space where all users can make their voices heard, knowing that their feedback will be considered and acted upon as appropriate. We believe that this approach fosters a culture of transparency, collaboration, and mutual respect, which ultimately benefits all users of our platform.</p>
      <div className='imagf'>
        <img alt="img" src={Feedback}/>
    </div> 
      
    </div>
  </div>
     
  );
}
export default AboutUs