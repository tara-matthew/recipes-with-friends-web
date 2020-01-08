const {
    Bookmark
} = require ('../models')

module.exports = {
    async index(req, res) {
        try {
            const {recipeId} = req.query

            const bookmarks = await Bookmark.findAll({
                where: {
                    RecipeId: recipeId
                }
            })

            res.send(bookmarks)

        } catch(err) {
            res.status(500).send({
                error: err
            })
        }
    },

    async post(req,res) {
        try {
            const {recipeId} = req.body

            // Check whether this recipe has already been bookmarked
            const bookmark = await Bookmark.findOne({
                where: {
                    RecipeId: recipeId
                }
            })

            if (bookmark) {
                return res.status(400).send({
                    error: 'you already have this set as a bookmark'
                })
            }

            const newBookmark = await Bookmark.create({
                RecipeId: recipeId
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
