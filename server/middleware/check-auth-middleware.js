require('dotenv').config();
const jwt = require('jsonwebtoken');



// Check if user is authenticated
exports.auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.SESSION_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json("Token is not valid!");
            }

            req.user = user;
            res.status(200).json("You are authenticated");
            next();
        });
    } else {
        res.status(401).json("You are not authenticated!");
    }
};