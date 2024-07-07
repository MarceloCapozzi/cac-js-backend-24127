// script to load data into the database
// load dotenv library
require('dotenv').config({ path: '../.env' })

// Load project model
const Project = require('../models/Project');

// Load task model
const Task = require('../models/Task');

// create a new task
async function createTask() {
    try {
        // create a new project
        const project = await Project.create({
            name: 'Project 1',
            description: 'Description of Project 1',
            priority: 'high',
            status: 'active'
        });

        // create a new project
        await Project.create({
            name: 'Project 2',
            description: 'Description of Project 2',
            priority: 'medium',
            status: 'inactive'
        });
        
        // create a new task
        await Task.create({
            name: 'task-'+(Math.random().toString(36).slice(2)),
            description: 'Description of Task 1',
            status: 'open',
            priority: 'low',
            project_id: project.id
        });
        
        // create a new task
        await Task.create({
            name: 'task-'+(Math.random().toString(36).slice(2)),
            description: 'Description of Task 2',
            status: 'stuck',
            priority: 'medium',
            project_id: project.id
        });

        // create a new task
        await Task.create({
            name: 'task-'+(Math.random().toString(36).slice(2)),
            description: 'Description of Task 3',
            status: 'done',
            priority: 'high',
            project_id: project.id
        });

        // show a message to confirm that the task has been created
        console.log('🌱 Task has been created successfully.');
    } catch (error) {
        // show an error message if the task could not be created
        console.error('🚩 Error:', error);
    }
}

// call the function to create the task
createTask()