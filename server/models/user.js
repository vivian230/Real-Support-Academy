const db = require('../config/db');



class User {
    constructor(firstName, lastName, email, password, username){
        this.firstName  = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.username = username;
    }

    save = () => {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO users(
            first_name,
            last_name,
            email,
            password,
            username,
            created_at,
            is_admin
        )
        VALUES(
            '${this.firstName}',
            '${this.lastName}',
            '${this.email}',
            '${this.password}',
            '${this.username}',
            '${createdAtDate}',
            False

        );
        `;

        return db.execute(sql);
    }

    static findByEmail = (email) => {
        let sql = `SELECT * FROM users WHERE email = '${email}';`;

        return db.execute(sql);
    }

    static findByEmailUpdate = (email, id) => {
        let sql = `SELECT * FROM users WHERE email = '${email}' AND user_id != '${id}';`;

        return db.execute(sql);
    }

    static findByUsername = (username) => {
        let sql = `SELECT * FROM users WHERE username = '${username}';`;

        return db.execute(sql);
    }

    static findByUsernameUpdate = (username, id) => {
        let sql = `SELECT * FROM users WHERE username = '${username}' AND user_id != '${id}';`;

        return db.execute(sql);
    }

    static findById = (id) => {
        let sql = `SELECT * FROM users WHERE user_id = '${id}';`;

        return db.execute(sql);
    }

    static updateById = (id, firstName, lastName, email, username) => {
        let sql = `
        UPDATE users
        SET first_name = '${firstName}', last_name = '${lastName}', email = '${email}', username = '${username}'
        WHERE user_id = '${id}';
        `

        return db.execute(sql);
    }

    static updatePasswordById = (id, newPassword) => {
        let sql = `
        UPDATE users
        SET password = '${newPassword}'
        WHERE user_id = '${id}';
        `

        return db.execute(sql);
    }
}




module.exports = User;