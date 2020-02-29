const {Recipe, Ingredient, Step} = require ('../models')
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
                    include: [{
                        model: Ingredient,
                    }],
                    where: {
                        [Op.or]: [
                            {title:
                                {[Op.like]: `%${search}%`}
                            },
                            {'$Ingredients.title$':
                                {[Op.like]: `%${search}%`}
                            }
                        ]
                    },
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

    /**
     * [Posts recipe data to the Recipe, Ingredients and RecipeIngredients tables]
     * @param  {[object]}  req [request object]
     * @param  {[object]}  res [response object]
     * @return {Promise}     [completed Promise]
     */

    async post(req, res) {
        try {
            var ingredients = req.body.ingredients
            var steps = req.body.steps
            const recipe = await Recipe.create(req.body.information)
                .then(function(createdRecipe) {
                        // Adding ingredients

                        ingredients.map(async function (ingredient) {
                            // Query the db to see if there are any matching ingredients already
                            Ingredient.count({
                                where: {
                                    title: ingredient
                                },
                            }).then(function (count) {
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
                            }).then(function (createdIngredient) {
                                // Add this data into the RecipeIngredient table
                                return createdRecipe.addIngredient(createdIngredient)
                            })
                        })

                        // Adding recipe steps

                        steps.map(async function (step) {
                            // Query the db to see if there are any matching steps already
                            Step.count({
                                where: {
                                    title: step
                                },
                            }).then(function (count) {
                                // Does already exist
                                if (count > 0) {
                                    // Return this data into the function
                                    return Step.findOne({
                                        where: {
                                            title: step
                                        }
                                    })
                                } else {
                                    // Create the step and return this
                                    return Step.create({
                                        title: step
                                    })
                                }
                            }).then(function (createdStep) {
                                // Add this data into the RecipeStep table
                                return createdRecipe.addStep(createdStep)
                            }).then(function (added) {
                                // Once this is all done, return to home dashboard
                                res.send(recipe)
                            })
                        })
                    }
                )
        } catch(error) {
            res.status(500).send({
                error: "Couldn't create new recipe"
            })
        }
    },

    async show(req,res) {
        try {
            const recipeId = req.params.recipeId
            const recipe = await Recipe.findAll({
                where: {
                    id: recipeId,
                },
                include: [
                    {
                        model: Ingredient,
                    },
                    {
                        model: Step
                    }
                ],
            })
            res.send(recipe[0])
        } catch(error) {
            res.status(500).send({
                error: 'Could not retrieve recipe'
            })
        }
    }
}
