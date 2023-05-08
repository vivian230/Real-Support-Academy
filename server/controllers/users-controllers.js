require('dotenv').config();
const User = require('../models/user');
const jwt = require('jsonwebtoken');



// Function to check if passwords match
const checkPasswords = (passwordOne, passwordTwo) => {
    if (passwordOne === passwordTwo) return true;
    return false;
};

// Function to check if emails match
const checkEmails = (emailOne, emailTwo) => {
    if (emailOne.toLowerCase() === emailTwo.toLowerCase()) return true;
    return false;
};

// Function to check if username exists in db
const doesExistUsername = async (username) => {
    try {
        let [user, _] = await User.findByUsername(username);
        if (user.length > 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Function to check if username exists in db, to be used in Update Profile, as this function does not check for the username already in use by the user
const doesExistUsernameUpdate = async (username, id) => {
    try {
        let [user, _] = await User.findByUsernameUpdate(username, id);
        if (user.length > 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Function to check if email exists in db
const doesExistEmail = async (email) => {
    try {
        let [user, _] = await User.findByEmail(email);
        if (user.length > 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Function to check if email exists in db, to be used in Update Profile, as this function does not check for the email already in use by the user
const doesExistEmailUpdate = async (email, id) => {
    try {
        let [user, _] = await User.findByEmailUpdate(email, id);
        if (user.length > 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Function to check if username and password pair exist in the db
const authenticateUserByUsername = async (username, password) => {
    try {
        let [user, _] = await User.findByUsername(username);
        if (user.length > 0) return user[0].password === password;
        return false;
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Function to check if email and password pair exist in the db
const authenticateUserByEmail = async (email, password) => {
    try {
        let [user, _] = await User.findByEmail(email);
        if (user.length > 0) return user[0].password === password;
        return false;
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Function to check if password entered in changePassword form matches existing user password
const authenticateUserById = async (id, password) => {
    try {
        let [user, _] = await User.findById(id);
        if (user.length > 0) return user[0].password === password;
        return false;
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// function to create json web token
const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username}, process.env.SESSION_SECRET, { expiresIn: "24h" });
};

// Function to register new user
exports.userRegister = async (req, res, next) => {
    try {
        let { firstName, lastName, email, password, repeatPassword, username } = req.body;
        
        if (firstName.trim().length === 0 || lastName.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0 || repeatPassword.trim().length === 0 || username.trim().length === 0) {
            res.status(403).json({ message: 'Fields cannot be left blank!' });
        } else if (await doesExistEmail(email)) {
            res.status(403).json({ message: 'Email already exists! Please choose a different email' });
        } else if (await doesExistUsername(username)) {
            res.status(403).json({ message: 'Username already exists!' });
        } else if (/\s/g.test(username.trim())) {
            res.status(403).json({ message: 'Username cannot contain white spaces!' });
        } else if (password.length < 8) {
            res.status(403).json({ message: "Password must be at least 8 characters long!" });
        } else if (!checkPasswords(password, repeatPassword)) {
            res.status(403).json({ message: "Passwords do not match!" });
        } else {
            let user = new User(firstName.replace(/\s+/g, ' ').trim(), lastName.replace(/\s+/g, ' ').trim(), email.replace(/\s+/g, ' ').trim(), password.replace(/\s+/g, ' ').trim(), username.replace(/\s+/g, ' ').trim());
            user = await user.save();
            res.status(201).json({ message: 'Registration successful. You can now login.'});
        }
        
    } catch (error) {
        console.log(error);
        next(error);
    }
};

 // Function to login user
 exports.userLogin = async (req, res, next) => {
    try {
        let { email, username, password } = req.body;

        if (await authenticateUserByEmail(email, password)) {
            let [user, _] = await User.findByEmail(email);
            const accessToken = generateAccessToken(user[0]);

            return res.status(201).json({
                id: user[0].user_id,
                isAdmin: user[0].is_admin,
                accessToken: accessToken
            });
        } else if (await authenticateUserByUsername(username, password)) {
            let [user, _] = await User.findByUsername(username);
            const accessToken = generateAccessToken(user[0]);

            return res.status(201).json({
                id: user[0].user_id,
                isAdmin: user[0].is_admin,
                accessToken: accessToken
            });
        } else {
            return res.status(403).json({ message: 'Invalid authentication. Check your credentials.' });
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// Function to get user details
exports.userDetails = async (req, res, next) => {
    try {
        let id = req.params.userId;
        let [user, _] = await User.findById(id);

        res.status(200).json({user});
    } catch (error) {
        console.log(error);
        next(error);
    }
}

// Function to update user details
exports.userUpdateDetails = async (req, res, next) => {
    try {
        let id = req.params.userId;
        let { firstName, lastName, email, confirmationEmail, username } = req.body;

        if (!checkEmails(email, confirmationEmail)) {
            res.status(403).json({ message: "Emails do not match!" });
        } else if (await doesExistEmailUpdate(email, id)) {
            res.status(403).json({ message: 'Email already exists! Please choose a different email' });
        } else if (await doesExistUsernameUpdate(username, id)) {
            res.status(403).json({ message: 'Username already exists!' });
        } else {
            await User.updateById(id, firstName, lastName, email, username);
            res.status(200).json({message: "Details successfully updated!"});
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
}

// Function to change user password
exports.userChangePassword = async (req, res, next) => {
    try {
        let id = req.params.userId;
        let { currentPassword, newPassword, confirmNewPassword } = req.body;

        if (! await authenticateUserById(id, currentPassword)) {
            res.status(403).json({ message: "Incorrect Password!" });
        } else if (newPassword !== confirmNewPassword) {
            res.status(403).json({ message: 'Passwords do not match!' });
        } else if (newPassword.length < 8) {
            res.status(403).json({ message: "Password must be at least 8 characters long!" });
        } else {
            await User.updatePasswordById(id, newPassword);
            res.status(200).json({message: "Password successfully updated!"});
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
}

