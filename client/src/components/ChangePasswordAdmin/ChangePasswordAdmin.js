import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import styles from './changepasswordadmin.module.css';

const ChangePassword = () => {
    const [currentPwd, setCurrentPwd] = useState('');
    const [newPwd, setNewPwd] = useState('');
    const [confirmNewPwd, setConfirmNewPwd] = useState('');
    const [backendPositiveData, setBackendPositiveData] = useState([]);
    const [backendErrorData, setBackendErrorData] = useState([]);

    let navigate = useNavigate();

    const handleSubmitChange = (e) => {
        e.preventDefault();
        let userId = localStorage.getItem('userId');
        axios.put('http://localhost:3333/user/account/changepassword/' + userId, {
        currentPassword: currentPwd,
        newPassword: newPwd,
        confirmNewPassword: confirmNewPwd
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
                <button className={styles.back_button} onClick={() => navigate('/admin/account')}><FaTimes/></button>
                <div className={styles.heading}>
                        <div className={styles.head}>
                            Change Password
                        </div>
                </div>
                <form className={styles.update} onSubmit={handleSubmitChange}>
                    <div className={styles.fields}>
                        <input value={currentPwd} onChange={(e) => setCurrentPwd(e.target.value)} type="password" placeholder="Current Password" id="CurrentPassword" name="CurrentPassword" className={styles.input} required/>
                    </div>
                    <div className={styles.fields}>
                        <input value={newPwd} onChange={(e) => setNewPwd(e.target.value)} type="password" placeholder="New Password" id="NewPassword" name="NewPassword" className={styles.input} required/>
                    </div>
                    <div className={styles.fields}>
                        <input value={confirmNewPwd} onChange={(e) => setConfirmNewPwd(e.target.value)} type="password" placeholder="Confirm New Password" id="ConfirmNewPassword" name="ConfirmNewPassword" className={styles.input} required/>
                    </div>
                    <div className={styles.btn}>
                        <div className={styles.btn_style}></div>
                        <input type="submit" value="Change Password" className={styles.input}/>
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

export default ChangePassword;