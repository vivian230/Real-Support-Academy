import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from 'axios';

import defaultCourseImg from "../../assets/defaultCourse.png";

// import styling
import "./courses.css";
// import component CourseCard
import CourseCard from "./CourseCard";



const CourseSubSection = (props) => {
  const { searchResults } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedTime, setSelectedTime] = useState("All");

  useEffect(() => {
    axios.get('http://localhost:3333/allcourses')
    .then((response) => {
      setFilteredCourses(response.data.courses.map((course) => {
        return {
          id: course.course_id,
          title: course.course_title,
          lesson: course.course_length,
          difficulty: course.course_difficulty.charAt(0).toUpperCase() + course.course_difficulty.slice(1),
          imgUrl: course.course_imgUrl || defaultCourseImg,
        };
      }));
      setCourses(response.data.courses.map((course) => {
        return {
          id: course.course_id,
          title: course.course_title,
          lesson: course.course_length,
          difficulty: course.course_difficulty.charAt(0).toUpperCase() + course.course_difficulty.slice(1),
          imgUrl: course.course_imgUrl || defaultCourseImg,
        };
      }));

    })
    .catch(error => {
      console.log(error);
    })
  },[])



  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCourses = filteredCourses.slice(startIndex, endIndex);

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

const filterCourses = () => {
  if (searchResults[0] === "No courses Found") return searchResults;
  const allCourses = searchResults.length > 0
    ? searchResults.map(course => {
        return {
          id: course.course_id,
          title: course.course_title,
          lesson: course.course_length,
          difficulty: course.course_difficulty.charAt(0).toUpperCase() + course.course_difficulty.slice(1),
          imgUrl: course.course_imgUrl || defaultCourseImg,
        };
      })
    : courses;

  let filteredCourses = allCourses;

  if (selectedDifficulty !== "All") {
    filteredCourses = filteredCourses.filter(course => course.difficulty === selectedDifficulty);
  }

  if (selectedTime !== "All") {
    filteredCourses = filteredCourses.filter(course => {
      if (selectedTime === "4weeks") {
        return course.lesson < 4;
      } else if (selectedTime === "8weeks") {
        return course.lesson < 8;
      } else {
        return course.lesson >= 8;
      }
    });
  }

  return filteredCourses;
};

    useEffect(() => {
        setFilteredCourses(filterCourses());
    }, [searchResults, selectedDifficulty, selectedTime]);



    return (
        <>
        <section>
            <Container className="container">
                <Row>
                    <Col lg="12">
                        <div className="filter-bar d-flex justify-content-start align-items-center">
                            <select id="difficulty-select" name="difficulty" value={selectedDifficulty}
                                onChange={(e) => setSelectedDifficulty(e.target.value)}>
                                <option value="" disabled selected>Select Difficulty</option>
                                <option value="All">All</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>

                            <select id="time-select" name="time" value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}>
                                <option value="" disabled selected>Select Time</option>
                                <option value="All">All</option>
                                <option value="4weeks">Less than 4 weeks</option>
                                <option value="8weeks">Less than 8 weeks</option>
                                <option value="8weeksmore">8 or more weeks</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" className="mb-5">
                        <div className="course__top d-flex justify-content-between align-items-center">
                            <div className="course__top__left w-50">
                                <h1 className="courses">Courses</h1>
                                <p className="para">
                                    Explore the range of courses we have available, where you can gain essential digital skills
                                    opening many employment opportunities for their future.
                                    Courses vary in difficulty level; easy, medium and hard, and each course comes with a
                                    set of practice quizzes and a final exam to test your knowledge.
                                </p>
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
            if (visibleCourses[0] === "No courses Found") {
              return (<Col>
                <div className="no-results">
                  <h3>No results found</h3>
                  <p>Please try again with different course name.</p>
                </div>
              </Col>)
          } else if (visibleCourses.length > 0) {
            return (visibleCourses.map(course => (
              <Col className="flexitem" lg="4" md="6" sm="6">
                <CourseCard
                  courseId={course.id}
                  title={course.title}
                  lesson={course.lesson}
                  difficulty={course.difficulty}
                  rating={course.rating}
                  imgUrl={course.imgUrl}
                />
              </Col>
            )))
          } else {
            return (<Col>
            <div className="no-results">
              <h3>No results found</h3>
              <p>Please try again with different filters.</p>
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
};
export default CourseSubSection;