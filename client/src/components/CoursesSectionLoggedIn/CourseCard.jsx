import React, {useEffect, useState, useRef} from "react";
import axios from 'axios';

// implemented constructor with parameters intialised in Courses.jsx


const CourseCard = (props) => {
  const { imgUrl, courseId, title, lesson, difficulty } = props;
  const userId = localStorage.getItem('userId');
  const [enrolled, setEnrolled] = useState(null);
  const enrollBtn = useRef();
  const resumeBtn = useRef();

  useEffect(() => {
    axios.post('http://localhost:3333/user/enrolledCourse/' + userId, {
      courseId: courseId
    })
    .then(
      response => {
        response.data.course.length > 0 ? setEnrolled(true) : setEnrolled(false);
      }
    )
    .catch(error => {
      console.log(error);
    })
  }, [props])

  const handleEnrollment = () => {
    axios.post('http://localhost:3333/user/enroll/' + userId, {
      courseId: courseId
    })
    .then(
      response => {
        enrollBtn.current.style.display = "none";
        resumeBtn.current.style.display = "";
      }
    )
    .catch(error => {
      console.log(error);
    })
  };

  if (enrolled === null) return null;
  return (
    <div className="single__course__item">
      <div className="course__img" style={{display:"none"}}>
        {courseId}
      </div>
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className="info__container">
          <div className="info__item lesson">
            <span className="material-symbols-outlined book">menu_book</span>
            {lesson} Weeks
          </div>
          <div className="info__item difficulty">
            <span className="material-symbols-outlined Difficulty">monitoring</span> {difficulty}
          </div>
        </div>

        <div className="enroll__container">
          {enrolled ? (
            <><p ref={enrollBtn} className="enroll" onClick={handleEnrollment} style={{ display: 'none' }}>
              <button className="enroll_now"> Enroll Now</button>
            </p><p ref={resumeBtn} className="resume">
                <button className="resume_course"> Resume Course</button>
              </p></>
            ) : (
            <><p ref={enrollBtn} className="enroll" onClick={handleEnrollment}>
                <button className="enroll_now"> Enroll Now</button>
              </p><p ref={resumeBtn} className="resume" style={{ display: 'none' }}>
                  <button className="resume_course"> Resume Course</button>
                </p></>
        )}
      </div>
      </div>
    </div>
  );
};

export default CourseCard;