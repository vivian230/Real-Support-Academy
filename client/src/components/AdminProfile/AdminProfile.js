import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./adminprofile.css"

const AdminProfile = (props) => {
  let navigate = useNavigate();
  return (
    <div className="profile-container">
      <div className="box1-admin">
        <div className="userIconArea">
          <h1>{props.username}</h1>
          <img className="profileIcon" alt='user-icon' src={props.profileImg}></img>
          <br/>
          <button className='profileBtn' onClick={() => navigate('/admin/account/update')}>Edit Profile</button>          
        </div>
        <div className="userTextArea">
          <h3>Full Name</h3>
            <p>{props.fullname}</p>
          <h3>Email Address</h3>
            <p>{props.email} </p>
          <h3>Member Since</h3>
            <p>{props.memberSince}</p>
          <button className='profileBtn' onClick={() => navigate('/admin/account/changepassword')}>Change Password</button>          
        </div>
      </div> 
    </div>
  );
}

export default AdminProfile;
