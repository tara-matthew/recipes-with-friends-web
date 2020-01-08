const {
    sequelize,
    User,
    Recipe
} = require('../src/models')

// Bluebird is to make sure that all the database has been seeded before doing anything else
const Promise = require('bluebird')
const users = require('./users.json')
const recipes = require('./recipes.json')

sequelize.sync({force:true})
    .then(async function() {
        await Promise.all(
            users.map(user => {
                User.create(user)
            })
        )

        await Promise.all(
            recipes.map(recipe => {
                Recipe.create(recipe)
            })
        )
    })
