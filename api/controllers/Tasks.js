// load task model
const Task = require ("../models/Task.js")

// get all tasks
const getTasks = async (req,res) => {
    try {
        // find all tasks
        const tasks = await Task.findAll()
        // send tasks
        res.json(tasks)
    } catch (error) {
        // send error message
        res.json({ message:error.message })
    }
}

// get task by id
const getTasksById = async (req,res) => {
    try {
        // find task by id
        const task = await Task.findByPk(req.params.id)
        // send task
        res.json(task)
    } catch (error) {
        // send error message
        res.json({ message:error.message })
    }
}

// create a new task
const setTask = async (req,res) => {
    try {
        // create a new task
        await Task.create(req.body)
        // send success message
        res.json ({"message":`task has been created successfully - (#name:${req.body.name})`}) 
    } catch (error) {
        // send error message
        res.json({ message: error.message }) 
    }
}

// update a task
const updateTask = async (req,res) => {
    try {
        // update task
        await Task.update(req.body, {
            // where id is equal to req.params.id
            where: {id:req.params.id}
        })
        // send success message
        res.json ({"message":`task has been updated successfully - (#id:${req.params.id})`}) 
    } catch (error) {
        // send error message
        res.json({ message:error.message }) 
    }
}

// delete a task
const deleteTask = async (req,res) => {
    try {
        // delete task
        await Task.destroy({
            // where id is equal to req.params.id
            where: {id:req.params.id} 
        })
        // send success message
        res.json ({"message":`task has been deleted successfully - (#id:${req.params.id})`}) 
    } catch (error) {
        // send error message
        res.json({message:error.message}) 
    }
}

// export functions
module.exports = {  getTasks,
                    getTasksById,
                    setTask,
                    updateTask,
                    deleteTask }