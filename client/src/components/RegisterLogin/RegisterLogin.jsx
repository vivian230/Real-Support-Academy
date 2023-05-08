import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

import styles from './registerlogin.module.css';



export const RegisterLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [rPassword, setRpass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [backendPositiveData, setBackendPositiveData] = useState([]);
    const [backendErrorData, setBackendErrorData] = useState([]);

    const heading = useRef();
    const formData = useRef();
    const initialBtn = useRef();
    const nextBtn = useRef();
    const registerNow = useRef();
    const loginNow = useRef();
    
    useEffect(() => {
        nextBtn.current.onclick = () => {
            setBackendPositiveData([]);
            setBackendErrorData([]);
            setEmail('');
            setUsername('');
            setPass('');
            nextBtn.current.style.color = "white";
            initialBtn.current.style.color = "black";
            formData.current.style.marginLeft = "-50%";
            heading.current.style.marginLeft = "-50%";   
        };
        initialBtn.current.onclick = () => {
            setBackendPositiveData([]);
            setBackendErrorData([]);
            setFirstName('');
            setLastName('');
            setEmail('');
            setUsername('');
            setPass('');
            setRpass('');
            initialBtn.current.style.color = "white";
            nextBtn.current.style.color = "black";
            formData.current.style.marginLeft = "0%";
            heading.current.style.marginLeft = "0%";
            formData.current.reset();
        };
        registerNow.current.onclick = () => {
            nextBtn.current.click();
            return false;
        };
        loginNow.current.onclick = () => {
            initialBtn.current.click();
            return false;
        };
    }, []);


    const handleSubmitRegister = (e) => {
        e.preventDefault();
        setPass('');
        setRpass('');
        axios.post('http://localhost:3333/register', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        repeatPassword: rPassword,
        username: username
        })
        .then(
            response => setBackendPositiveData(response.data.message)
        )
        .catch((err) =>{
            setBackendErrorData(err.response.data.message);
        })
    }

    let navigate = useNavigate();

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        setEmail('');
        setUsername('');
        setPass('');
        await axios.post('http://localhost:3333/login', {
        email: email,
        username: username,
        password: password
        })
        .then(
            response => {
                localStorage.setItem('userId', response.data.id);
                localStorage.setItem('isAdmin', response.data.isAdmin);
                localStorage.setItem('token', response.data.accessToken);
                navigate('/user/home');
            }
        )
        .catch((err) =>{
            setBackendErrorData(err.response.data.message);
        })
    }

    return(
        <div className={styles.body}>
            <div className={styles.auth_form_container}>
                <div className={styles.heading}>
                    <div ref={heading} className={styles.head}>
                        Login
                    </div>
                    <div className={styles.head}>
                        Register
                    </div>
                </div>
                <div className={styles.slide_container}>
                    <div className={styles.slider_control}>
                        <input type="radio" name="slider" className={styles.radiologin} id="login" defaultChecked/>
                        <input type="radio" name="slider" className={styles.radioregister} id="register" />
                        <label htmlFor="login" ref={initialBtn} className={styles.slider} style={{color: 'white'}}>Login</label>
                        <label htmlFor="register" ref={nextBtn} className={styles.slider}>Register</label>
                        <div className={styles.slide_tab}></div>
                    </div>
                    <div className={styles.form_data}>
                        <form className={styles.login} ref={formData} onSubmit={handleSubmitLogin}>
                            <div className={styles.fields}>
                                <input value={email} onChange={(e) => {setEmail(e.target.value); setUsername(e.target.value)}} placeholder="Email/Username" id="EmailUsername" name="Email" className={styles.input} required/>
                            </div>
                            <div className={styles.fields}>
                                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="PasswordLogin" name="Password" className={styles.input} required/>
                            </div>
                            <div className={styles.btn}>
                                <div className={styles.btn_style}></div>
                                <input type="submit" value="Login" className={styles.input}/>
                            </div>
                            { (() => {
                                 if (backendErrorData.length > 0) {
                                    return (<p className={styles.negative}>{backendErrorData}</p>)
                                }
                            })()}
                            <div className={styles.registerlink}>
                                Not a Member? <a className={styles.registerlinka} href="#" ref={registerNow}>Register Now</a>
                            </div>
                        </form>
                        <form className={styles.register} onSubmit={handleSubmitRegister}>
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
                                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Username" id="Username" name="Username" className={styles.input} required/>
                            </div>
                            <div className={styles.fields}>
                                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="PasswordRegister" name="Password" className={styles.input} required/>
                            </div>
                            <div className={styles.fields}>
                                <input value={rPassword} onChange={(e) => setRpass(e.target.value)} type="password" placeholder="Confirm password" id="PasswordConfirm" name="Password" className={styles.input} required/>
                            </div>
                            <div className={styles.btn}>
                                <div className={styles.btn_style}></div>
                                <input type="submit" value="Register" className={styles.input}/>
                            </div>
                            { (() => {
                                if (backendPositiveData.length > 0) {
                                    return (<p className={styles.positive}>{backendPositiveData}</p>)
                                } else if (backendErrorData.length > 0) {
                                    return (<p className={styles.negative}>{backendErrorData}</p>)
                                }
                            })()}
                            <div className={styles.loginlink}>
                                Already have an account? <a className={styles.loginlinka} href="#" ref={loginNow}>Login Now</a>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}