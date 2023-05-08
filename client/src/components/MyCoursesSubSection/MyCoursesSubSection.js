import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import axios from 'axios';
import "./myCoursesSub.css"
import CourseCard from "./CourseCard";
import defaultCourseImg from "../../assets/defaultCourse.png";


const MyCoursesSubSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    axios.get('http://localhost:3333/user/enrolledCourses/' + userId)
    .then( 
      response => {
        setCourses(response.data.courses.map((course) => {
          return {
            id: course.course_id,
            title: course.course_title,
            lesson: course.course_length,
            difficulty: course.course_difficulty.charAt(0).toUpperCase() + course.course_difficulty.slice(1),
            imgUrl: course.course_imgUrl || defaultCourseImg,
            enrollmentDate: course.enrollment_date.slice(0, 10),
          };
        }));
        console.log(courses);
      }
    )
    .catch(error => {
      console.log(error);
    })
  }, [])

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCourses = courses.slice(startIndex, endIndex);

  const handlePrevClick = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
    }
    };

  return (
     <>
        <section>
            <Container className="container">
               
                <Row>
                    <Col lg="12" className="mb-5">
                        <div className="course__top d-flex justify-content-between align-items-center">
                            <div className="course__top__left w-50">
                                <h1 className="courses">Courses Enrolled</h1>
                            </div>
                        </div>
                    </Col>
              </Row>
         <Row>
          <Col className="d-flex justify-content-end">
            <div className="pagination-container">
              <nav>
                <ul className="pagination">
                  <li>
                    <a href="#!" onClick={(e) => handlePrevClick(e)}>&laquo;</a>
                  </li>
                  {[...Array(totalPages)].map((_, idx) => {
                    const pageNum = idx + 1;
                    return (
                      <li key={`page-${pageNum}`} className={pageNum === currentPage ? "active" : ""}>
                        <a href="#!" onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(pageNum);
                        }}>{pageNum}</a>
                      </li>
                    );
                  })}
                  <li>
                    <a href="#!" onClick={(e) => handleNextClick(e)}>&raquo;</a>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>
         </Row>             
               <Row>
  <div className="flexcontainer">
  { (() => {
          
          if (visibleCourses.length > 0) {
            return (visibleCourses.map(course => (
              <Col className="flexitem" lg="4" md="6" sm="6">
                <CourseCard
                  courseId={course.id}
                  title={course.title}
                  lesson={course.lesson}
                  difficulty={course.difficulty}
                  enrollmentDate={course.enrollmentDate}
                  imgUrl={course.imgUrl}
                />
              </Col>
            )))
          } else {
            return (<Col>
            <div className="no-results">
              <h4>No Courses Enrolled Yet</h4>
            </div>
          </Col>)
          }
          })()}
  </div>
</Row>
                
       </Container>
      </section>
     </>
  );
}

export default MyCoursesSubSection;
