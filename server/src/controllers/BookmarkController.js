const {
    Bookmark,
    Recipe
} = require ('../models')

const _ = require('lodash')

module.exports = {
    async index(req, res) {
        try {
            let bookmarks = null
            const {recipeId, userId} = req.query
            if (recipeId) {
                bookmarks = await Bookmark.findAll({
                    where: {
                        RecipeId: recipeId,
                        UserId: userId
                    }
                })
            } else {
                bookmarks = await Bookmark.findAll({
                where: {
                    UserId: userId
                },
                include: [
                    {
                        model: Recipe
                    }
                ]
            })
                // parses the result of the query to JSON
                .map(bookmark => bookmark.toJSON())

                // combines bookmark.Recipe and bookmark into a new empty object
                .map(bookmark => _.extend(
                    {},
                    bookmark.Recipe,
                    bookmark))
            }

            res.send(bookmarks)

        } catch(err) {
            res.status(500).send({
                error: err
            })
        }
    },

    async post(req,res) {
        try {
            const {recipeId, userId} = req.body

            // Check whether this recipe has already been bookmarked
            const bookmark = await Bookmark.findOne({
                where: {
                    RecipeId: recipeId,
                    UserId: userId
                }
            })

            if (bookmark) {
                return res.status(400).send({
                    error: 'you already have this set as a bookmark'
                })
            }

            const newBookmark = await Bookmark.create({
                RecipeId: recipeId,
                UserId: userId
            })

            res.send(newBookmark)
        } catch (err) {
            res.status(500).send({
                error: err
            })
        }
    },

    async delete(req, res) {
        try {
            const {bookmarkId} = req.params
            const bookmark = await Bookmark.findByPk(bookmarkId)
            await bookmark.destroy()
            res.send(bookmark)

        } catch(err) {
            res.status(500).send({
                error: err
            })
        }
    }
}
