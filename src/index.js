// Require Setup Modules
const express = require('express');
const app = express();
const dbSetup = require('./database/setup');
const dotenv = require('dotenv').config();

// Require Routes
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');

// Setup Port
const port = process.env.PORT;

// Import Middleware
app.use(express.json());
app.use('/', express.static(__dirname + '/views'));

// Setup Mongoose and database connection
dbSetup();

// Setup Connection Routes
app.use(authRoutes);
app.use(bookRoutes);

// Seeders
const { seedAdmin } = require('./seeders/admin');
seedAdmin();

// Set listening port for app
app.listen(port, () => console.log(`App is running at port ${port}`));