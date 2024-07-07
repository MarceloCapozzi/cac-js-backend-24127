// script to create the models in the database
// load dotenv library
require('dotenv').config({ path: '../.env' })

// load db configuration
const config = require ("../config/db.js")

// load db connection
const db = require('../data/db.js');

// load project model
const Project = require('../models/Project.js');

// load task model
const Task = require('../models/Task.js');

// define the relationships between the models
async function initDatabase() {
    try {
        // connect to the db
        await db.authenticate(); // authenticate db connection

        // show a message to confirm that the connection has been established correctly
        console.log('🔓 Connection has been established successfully.');
        
        // define the relationships between the models
        // sync the Project model
        await Project.sync({ alter: true });
        
        // sync the Task model
        await Task.sync({ alter: true });
    
        // show a message to confirm that the models have been synchronized correctly
        console.log('🌱 Models have been synchronized successfully.');

      } catch (error) {
        
        // show an error message if the models could not be synchronized
        console.error('🚩 Error:', error);

      } finally {
        
        // close the db connection
        await db.close();

        // show a message to confirm that the connection has been closed correctly
        console.log('🔒 Connection closed successfully.');
      }
}

// call the function to create the database
initDatabase();