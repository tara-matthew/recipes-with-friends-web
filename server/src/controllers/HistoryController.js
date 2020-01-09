const {
    History,
    Recipe
} = require('../models')

const _ = require('lodash')

module.exports = {
    async index(req, res) {
        try {
            const histories = await History.findAll({
            include: [
                {
                    model: Recipe
                }
            ]
        })
            // parses the result of the query to JSON
            .map(history=>history.toJSON())

            // combines history.Recipe and history into a new empty object
            .map(history => _.extend (
                {},
                history.Recipe,
                history
            ))
            res.send(_.uniqBy(histories, history => history.RecipeId))
        } catch (err) {
            res.status(500).send({
                error: 'error'
            })
        }
    },

    async post(req, res) {
        try {
            const {recipeId, userId} = req.body

            const history = await History.create({
                RecipeId: recipeId,
                UserId: userId
            })
            res.send(history)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to create the history object'
            })
        }

    }
}
