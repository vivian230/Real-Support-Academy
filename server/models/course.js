const db = require('../config/db');



class Course {
    constructor(title, description, length, difficulty){
        this.title  = title;
        this.description = description;
        this.length = length;
        this.difficulty = difficulty;
    }

    save = () => {
        let sql = `
        INSERT INTO courses(
            course_title,
            course_description,
            course_length,
            course_difficulty
        )
        VALUES(
            '${this.title}',
            '${this.description}',
            ${this.length},
            '${this.difficulty}'
        );
        `;

        return db.execute(sql);
    }

    static findAll = () => {
        let sql = `SELECT * FROM courses;`;

        return db.execute(sql);
    }

    static findByTitle = (title) => {
        let sql = `SELECT * FROM courses WHERE course_title = '${title}';`;

        return db.execute(sql);
    }

    static findByTitlePortion = (title) => {
        let sql = `SELECT * FROM courses WHERE course_title LIKE '%${title}%';`;

        return db.execute(sql);
    }

    static findByLength = (length) => {
        let sql = `SELECT * FROM courses WHERE course_length = ${length};`;

        return db.execute(sql);
    }

    static findByDifficulty = (difficulty) => {
        let sql = `SELECT * FROM courses where course_difficulty = '${difficulty}';`

        return db.execute(sql);
    }
}




module.exports = Course;