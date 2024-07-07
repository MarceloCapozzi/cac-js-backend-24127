// load dotenv library
require('dotenv').config()

// load cors library
const cors = require("cors")

// load express library
const express = require ("express")

// set app
const app = express()

// load db connection
const db = require ("./data/db.js")

// load config api
const config = require ("./config/api.js")

// set api port
const port = config.API_PORT

// load body-parser
const bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/json
app.use(bodyParser.json());

// import route for projects
const Projects = require("./routes/Projects.js")

// import route for tasks
const Tasks = require("./routes/Tasks.js")

// middleware to allow cross-origin requests
app.use(cors())

// routes for home
app.get ("/",(req,res)=>{
    // return current date in response
    res.send(new Date())
})

// routes for tasks
app.use("/tasks",Tasks)

// routes for projects
app.use("/projects",Projects)

// database connection
const conn = async ()=>{
    try {
        // authenticate db connection
        await db.authenticate()
        
    } catch (error) {
        // log error
        console.log(`🔴 DB connection status: error -> ${error}`)
    }
}

// set app to listen
app.listen(port,()=>{
    // call db connection
    conn()

    // log api server port
    console.log(`🚀 API Server Port: ${port}`);
})