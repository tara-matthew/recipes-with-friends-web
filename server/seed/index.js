const {
    sequelize,
    User,
    Recipe,
    Bookmark
} = require('../src/models')

// Bluebird is to make sure that all the database has been seeded before doing anything else
const Promise = require('bluebird')
const users = require('./users.json')
const recipes = require('./recipes.json')
const bookmarks = require('./bookmarks.json')


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

        await Promise.all(
            bookmarks.map(bookmark => {
                Bookmark.create(bookmark)
            })
        )
    })
