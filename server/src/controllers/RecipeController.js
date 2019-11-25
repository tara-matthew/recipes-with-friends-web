const {Recipe} = require ('../models')

module.exports = {
    async post(req, res) {
        try {
            const recipe = await Recipe.create(req.body)
            res.send(recipe)
        } catch(error) {
            res.status(500).send({
                error: "Couldn't create new recipe"
            })
        }
    },

    async index(req, res) {
        try {
            const recipes = await Recipe.findAll()
            res.send(recipes)
        } catch (error) {
            res.status(500).send({
                error: "Couldn't get recipes"
            })
        }
    },

    async show(req,res) {
        try {
            const recipeId = req.params.recipeId
            const recipe = await Recipe.findByPk(recipeId)
            res.send(recipe)
        } catch(error) {
            res.status(500).send({
                error: 'Could not retrieve recipe'
            })
        }
    }
}
