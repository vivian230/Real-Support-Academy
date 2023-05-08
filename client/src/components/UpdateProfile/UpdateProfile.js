import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import styles from './updateprofile.module.css';

const UpdateProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmationEmail, setConfirmationEmail] = useState('');
    const [username, setUsername] = useState('');
    const [backendPositiveData, setBackendPositiveData] = useState([]);
    const [backendErrorData, setBackendErrorData] = useState([]);

    let navigate = useNavigate();

    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        let userId = localStorage.getItem('userId');
        axios.put('http://localhost:3333/user/account/update/' + userId, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        confirmationEmail: confirmationEmail,
        username: username
        })
        .then(
            response => setBackendPositiveData(response.data.message)
        )
        .catch((err) =>{
            setBackendErrorData(err.response.data.message);
        })
    }

    return (
        <div className={styles.body}>
            <div className={styles.auth_form_container}>
                <button className={styles.back_button} onClick={() => navigate('/user/account')}><FaTimes/></button>
                <div className={styles.heading}>
                        <div className={styles.head}>
                            Update Profile
                        </div>
                </div>
                <form className={styles.update} onSubmit={handleSubmitUpdate}>
                    <div className={styles.fields}>
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="firstname" placeholder="First Name" id="FirstName" name="FirstName" className={styles.input} required/>
                    </div>
                    <div className={styles.fields}>
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="lastname" placeholder="Last Name" id="LastName" name="LastName" className={styles.input} required/>
                    </div>
                    <div className={styles.fields}>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="Email" name="Email" className={styles.input} required/>
                    </div>
                    <div className={styles.fields}>
                        <input value={confirmationEmail} onChange={(e) => setConfirmationEmail(e.target.value)} type="email" placeholder="Confirm Email" id="Email" name="Email" className={styles.input} required/>
                    </div>
                    <div className={styles.fields}>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Username" id="Username" name="Username" className={styles.input} required/>
                    </div>
                    <div className={styles.btn}>
                        <div className={styles.btn_style}></div>
                        <input type="submit" value="Update Profile" className={styles.input}/>
                    </div>
                    { (() => {
                        if (backendPositiveData.length > 0) {
                            return (<p className={styles.positive}>{backendPositiveData}</p>)
                        } else if (backendErrorData.length > 0) {
                            return (<p className={styles.negative}>{backendErrorData}</p>)
                        }
                    })()}
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile;