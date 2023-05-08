import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./profile.css"
import Certificate from '../../assets/certificate.png';
// import ProfileIcon from './assets/profileIcon.png';

const Profile = (props) => {
  let navigate = useNavigate();
  return (
    <div className="profile-container">
      <div className="box1">
        <div className="userIconArea">
          <h1>{props.username}</h1>
          <img className="profileIcon" alt='user-icon' src={props.profileImg}></img>
          <br/>
          <button className='profileBtn' onClick={() => navigate('/user/account/update')}>Edit Profile</button>          
        </div>
        <div className="userTextArea">
          <h3>Full Name</h3>
            <p>{props.fullname}</p>
          <h3>Email Address</h3>
            <p>{props.email} </p>
          <h3>Member Since</h3>
            <p>{props.memberSince}</p>
          <button className='profileBtn' onClick={() => navigate('/user/account/changepassword')}>Change Password</button>          
        </div>
      </div> 
      <div className="box2">
        <h2>Certificates</h2>
        <img alt='certificate' src={Certificate}></img>
        <img alt='certificate' src={Certificate}></img>

        
      </div>
    </div>
  );
}

export default Profile;
