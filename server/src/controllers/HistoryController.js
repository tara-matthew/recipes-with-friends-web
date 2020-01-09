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
            .map(history=>history.toJSON())
            .map(history => _.extend (
                {},
                history.Recipe,
                history
            ))
            res.send(histories)
        } catch (err) {
            res.status(500).send({
                error: 'error'
            })
        }
    },

    async post(req, res) {
        try {
            const {recipeId} = req.body

            const history = await History.create({
                RecipeId: recipeId,
            })
            res.send(history)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to create the history object'
            })
        }

    }
}
