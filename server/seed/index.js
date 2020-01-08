const {
    sequelize,
    User
} = require('../src/models')

// Bluebird is to make sure that all the database has been seeded before doing anything else
const Promise = require('bluebird')
const users = require('./users.json')

sequelize.sync({force:true})
    .then(async function() {
        await Promise.all(
            users.map(user => {
                User.create(user)
            })
        )
    })
