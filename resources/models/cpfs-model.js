"use strict";

const Sequelize = require('sequelize');
const db = new Sequelize('mm', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  
    // SQLite only
    storage: './data/mm.sqlite'
});

//let db = new sequelize('sqlite://mm.sqlite');

/**
 * CPF registration scheme.
 */
const CpfsSchema = db.define('cpf', {
    name: {
        type: Sequelize.STRING,
        require: true,
        validate: {
            max: 100,
            min: 3
        }
    },
    cpf:{
        type: Sequelize.STRING,
        require: true,
        validate: {
            min: 11
        },
        unique: true
    },
    blackList: {
        type: Sequelize.ENUM,
        values: ['free', 'block'],
        default: 'free',
        validate: {
            max: 5,
            min: 4
        }
    }
});


CpfsSchema.sync().then(function(){});

module.exports = CpfsSchema;