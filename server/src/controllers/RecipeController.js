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


    async post(req, res) {
        try {
            var ingredients = req.body.ingredients
            const recipe = await Recipe.create(req.body.information)
                .then(function(createdRecipe) {
                    ingredients.map(async function(ingredient) {
                        // Query the db to see if there are any matching ingredients already
                        Ingredient.count({
                            where: {
                                title: ingredient
                            },
                        }).then(function(count) {
                            // Does already exist
                            if (count > 0) {
                                // Return this data into the function
                                return Ingredient.findOne({
                                    where: {
                                        title: ingredient
                                    }
                                })
                            } else {
                                // Create the ingredient and return this
                                return Ingredient.create({
                                    title: ingredient
                                })
                            }
                        }).then(function(createdIngredient) {
                            // Add this data into the RecipeIngredient table
                            return createdRecipe.addIngredient(createdIngredient)
                        }).then(function(added) {
                            // Once this is all done, return to home dashboard
                            res.send(recipe)
                        })
                    })
                })
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
