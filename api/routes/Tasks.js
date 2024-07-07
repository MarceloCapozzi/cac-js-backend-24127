// load express library
const express = require ("express")

// load router
const router = express.Router()

// import controllers
const { getTasks,
        getTasksById,
        setTask,
        updateTask,
        deleteTask } = require("../controllers/Tasks.js")

// get all tasks
router.get ("/", getTasks)

// get task by id
 router.get ("/:id", getTasksById)

// create a new task
router.post ("/", setTask)

// update task
router.put ("/:id", updateTask)

// delete task
router.delete ("/:id", deleteTask)

// export router
module.exports = router