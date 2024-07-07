// load express library
const express = require ("express")

// load router
const router = express.Router()

// import controllers
const { getProjects,
        getProjectsById,
        setProject,
        updateProject,
        deleteProject } = require("../controllers/Projects.js")

// get all projects
router.get ("/", getProjects)

// get project by id
router.get ("/:id", getProjectsById)

// create a new project
router.post ("/", setProject)

// update project
router.put ("/:id", updateProject)

// delete project
router.delete ("/:id", deleteProject)

// export router
module.exports = router