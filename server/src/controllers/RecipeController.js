const {Recipe, Ingredient, RecipeIngredient} = require ('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {

    async index(req, res) {
        try {
            let recipes = null
            const search = req.query.search

            //If something has been searched
            if (req.query.search) {
                recipes = await Recipe.findAll({
                    where: {
                        [Op.or]: [
                            'title', 'ingredients'
                        ].map(key => ({
                            [key]: {
                                [Op.like]: `%${search}%`
                            }
                        }))
                    }
                })
            } else {
                //Otherwise get all recipes
                recipes = await Recipe.findAll()
            }

            res.send(recipes)

        } catch (error) {
            res.status(500).send({
                error: "Couldn't get recipes"
            })
        }
    },

    post(req, res) {
        try {
            const recipe = Recipe.create(req.body)
                .then(function(createdRecipe) {
                    return Ingredient.create({
                        title: 'test'
                    })

                    .then(function(createdIngredient) {
                        return createdRecipe.addIngredient(createdIngredient)
                    })
                })
                .then(function(addedIngredient) {
                    console.log('success')
                })
            res.send(recipe)
        } catch(error) {
            res.status(500).send({
                error: "Couldn't create new recipe"
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
