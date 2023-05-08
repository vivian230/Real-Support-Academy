const express = require('express');

const checkAuth = require('../middleware/check-auth-middleware');
const userControllers = require('../controllers/users-controllers');
const courseControllers = require('../controllers/course-controllers');

const router = express.Router();



// Register user
router.post('/register', userControllers.userRegister);

// Login user
router.post('/login', userControllers.userLogin);

// Get all courses
router.get('/allcourses', courseControllers.getAllCourses);

// Get courses based on search
router.post('/searchcourses', courseControllers.getCoursesBySearch);

module.exports = router;