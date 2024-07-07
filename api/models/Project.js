// load db connection
const db = require ("../data/db.js")

// load sequelize data types
const {DataTypes, Model} = require ("sequelize")

// set schema for projects
const Project = db.define ("Projects",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type:DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    description: {
        type:DataTypes.TEXT,
        allowNull: true
    },
    priority: {
        type:DataTypes.STRING,
        allowNull: false
    },
    start_date: {
        type:DataTypes.DATE,
        allowNull: true
    },
    end_date_expected: {
        type:DataTypes.DATE,
        allowNull: true
    },
    status: {
        type:DataTypes.STRING,
        allowNull: true
    }
}, {
    db, // This is the db connection
    modelName: 'Project' // This is the model name
});

// export project model
module.exports = Project