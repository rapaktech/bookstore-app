// Require Setup Modules
const express = require('express');
const app = express();
const dbSetup = require('./database/setup');
const bookRoutes = require('./routes/bookRoutes');

// Setup Port
const port = 5000;

// Import Middleware
app.use(express.json());

// Setup Mongoose and database connection
dbSetup();

// Setup Connection Routes
app.use(bookRoutes);

// Set listening port for app
app.listen(port, () => console.log(`App is running at port ${port}`));