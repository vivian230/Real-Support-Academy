import React, { useState } from "react";
import axios from 'axios';

import styles from './addcourse.module.css';

const AddCourse = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [length, setLength] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [backendPositiveData, setBackendPositiveData] = useState([]);
    const [backendErrorData, setBackendErrorData] = useState([]);

    const handleSubmitAdd = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3333/user/admin/addcourse', {
        title: title,
        description: description,
        length: length,
        difficulty: difficulty
        })
        .then(
            response => {
                setBackendPositiveData(response.data.message);
                setTitle('');
                setDescription('');
                setLength('');
                setDifficulty('');
            }
            
        )
        .catch((err) =>{
            setBackendErrorData(err.response.data.message);
        })
    }

    return (
        <div className={styles.body}>
            <div className={styles.auth_form_container}>
                <div className={styles.heading}>
                        <div className={styles.head}>
                            Add New Course
                        </div>
                </div>
                <form className={styles.add} onSubmit={handleSubmitAdd}>
                    <div className={styles.fields}>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="title" placeholder="Course Title" id="Title" name="Title" className={styles.input} required/>
                    </div>
                    <div className={styles.fields}>
                        <input value={description} onChange={(e) => setDescription(e.target.value)} type="description" placeholder="Course Description" id="Description" name="Description" className={styles.input} required/>
                    </div>
                    <div className={styles.fields}>
                        <input value={length} onChange={(e) => setLength(e.target.value)} type="length" placeholder="Course Length (Weeks)" id="Length" name="Length" className={styles.input} required/>
                    </div>
                    <div className={styles.fields}>
                        <input value={difficulty} onChange={(e) => setDifficulty(e.target.value)} type="difficulty" placeholder="Course Difficulty (Easy, Medium, Hard)" id="Difficulty" name="Difficulty" className={styles.input} required/>
                    </div>
                    <div className={styles.btn}>
                        <div className={styles.btn_style}></div>
                        <input type="submit" value="Add Course" className={styles.input}/>
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

export default AddCourse;