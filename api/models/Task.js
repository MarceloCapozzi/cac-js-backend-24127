// load db connection
const db = require ("../data/db.js")

// load sequelize data types
const {DataTypes} = require ("sequelize")

// set schema for tasks
const Task = db.define ("Task",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    project_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Projects', // name of target model
            key: 'id' // name of the key in target model
        }
    },
    name: {
        type:DataTypes.STRING,
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
    end_date_real: {
        type:DataTypes.DATE,
        allowNull: true
    },
    status: {
        type:DataTypes.STRING,
        allowNull: true
    }
}, {
    db, // This is the db connection
    modelName: 'Task' // This is the model
});

// export task model
module.exports = Task