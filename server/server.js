require('dotenv').config();
const express = require('express');
const cors = require('cors');

const genRoutes = require('./routes/general-routes');
const authRoutes = require('./routes/auth-routes');

const app = express();

app.use(cors({credentials: true, origin: process.env.ORIGIN_URL}));

app.use(express.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with / to general-routes.js
app.use('/', genRoutes);
// Redirect requests to endpoint starting with /user to auth-routes.js
app.use('/user', authRoutes);



// Server listening on Port 3333
app.listen(process.env.SERVER_PORT, () => console.log(`Server running on http://localhost:${process.env.SERVER_PORT}`));