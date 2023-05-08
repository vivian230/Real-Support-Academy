import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'> 
        <div>
          <h1>Real Support Academy</h1>
          <p>Learn with no limits.</p>
        </div>
        <div>
          <a href='/'>
            <i className='fa-brands fa-facebook-square'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-instagram-square'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-youtube-square'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-twitter-square'></i>
          </a>
        </div>
      </div>
      <div className='bottom'> 
      <div>
        <h4>Explore</h4>
        <a href=''>Home</a>
        <a href=''>About Us</a>
        <a href=''>Courses</a>
      </div>
      <div>
        <h4>Information</h4>
        <a href=''>Membership</a>
        <a href=''>Purchases Guide</a>
        <a href=''>Contact Us</a>
        <a href=''>FAQs</a>
      </div>
      <div>
      <h4>Other</h4>
        <a href=''>Terms of Service</a>
        <a href=''>Privacy Policy</a> 
        <a href=''>License</a>               
      </div>
      <div>
        <h4>Get in Touch</h4>
        <a href=''>
          <i className="fa-solid fa-envelope"></i> rsasupport@gmail.com
        </a>
        <a href=''>
          <i className="fa-solid fa-phone"></i> +44 75784 90098
        </a>
      </div>
      
      </div>
    </div>
  );
}

export default Footer;
