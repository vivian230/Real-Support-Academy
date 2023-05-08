const db = require('../config/db');



class Enrollment {
    constructor(courseId, userId){
        this.courseId  = courseId;
        this.userId = userId;
    }

    save = () => {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO enrollments(
            course_id,
            user_id,
            enrollment_date
        )
        VALUES(
            '${this.courseId}',
            '${this.userId}',
            '${createdAtDate}'
        );
        `;

        return db.execute(sql);
    }

    static findAll = (userId) => {
        let sql = `
        SELECT courses.course_id, courses.course_title, courses.course_description, courses.course_length, courses.course_difficulty, enrollments.enrollment_date
        FROM courses
        INNER JOIN enrollments ON courses.course_id = enrollments.course_id
        WHERE enrollments.user_id = ${userId};`;

        return db.execute(sql);
    }

    static findOne = (userId, courseId) => {
        let sql = `
        SELECT enrollment_date
        FROM enrollments
        WHERE user_id = ${userId} AND course_id = ${courseId};`;

        return db.execute(sql);
    }

}




module.exports = Enrollment;