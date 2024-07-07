// load project model
const Project = require ("../models/Project.js")

// get all projects
const getProjects = async (req,res) => {
    try {
        // find all projects
        const projects = await Project.findAll()
        // send projects
        res.json(projects)
    } catch (error) {
        // send error message
        res.json({ message:error.message })
    }
}

// get project by id
const getProjectsById = async (req,res) => {
    try {
        // find project by id
        const project = await Project.findByPk(req.params.id)
        // send project
        res.json(project)
    } catch (error) {
        // send error message
        res.json({ message:error.message })
    }
}

// create a new project
const setProject = async (req,res) => {
    try {
        // create a new project
        await Project.create(req.body)
        // send success message
        res.json ({"message":`project has been created successfully - (#name:${req.body.name})`}) 
    } catch (error) {
        // send error message
        res.json({ message: error.message }) 
    }
}

// update a project
const updateProject = async (req,res) => {
    try {
        // update project
        await Project.update(req.body, {
            // where id is equal to req.params.id
            where: {id:req.params.id}
        })
        // send success message
        res.json ({"message":`project has been updated successfully - (#id:${req.params.id})`}) 
    } catch (error) {
        // send error message
        res.json({ message:error.message }) 
    }
}

// delete a project
const deleteProject = async (req,res) => {
    try {
        // delete project
        await Project.destroy({
            // where id is equal to req.params.id
            where: {id:req.params.id} 
        })
        // send success message
        res.json ({"message":`project has been deleted successfully - (#id:${req.params.id})`}) 
    } catch (error) {
        // send error message
        res.json({message:error.message}) 
    }
}

// export functions
module.exports = {  getProjects,
                    getProjectsById,
                    setProject,
                    updateProject,
                    deleteProject }