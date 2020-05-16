const {Recipe, Ingredient, Step, RecipeIngredient, Measurement} = require ('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const _ = require('lodash')


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
            var ingredients = req.body.splitIngredients
            var steps = req.body.steps

            const recipe = await Recipe.create(req.body.information)
                .then(async function(createdRecipe) {
                    // Adding ingredients
                    // Mapping does not work, use a loop instead
                    for (const ingredient of ingredients) {
                        // Check if already exists
                        await Ingredient.count({
                            where: {
                                title: ingredient.item
                            }
                        }).then(async function (count) {
                            // Does already exist
                            if (count > 0) {
                                // Return this data into the function
                                return Ingredient.findOne({
                                    where: {
                                        title: ingredient.item
                                    }
                                })
                            } else {
                                // Create the ingredient and return this
                                return Ingredient.create({
                                    title: ingredient.item
                                })
                            }
                        }).then(async function (createdIngredient) {
                            // Add this data into the RecipeIngredient table
                            return createdRecipe.addIngredient(createdIngredient, {through: {amount: ingredient.amount}})
                        }).then(async function(createdRecipeIngredient) {
                            // Find the matching ingredient
                            await Measurement.count({
                                where: {
                                    title: ingredient.measurement
                                }
                            }).then(async function(count) {
                                if (count > 0) {
                                    return Measurement.findOne({
                                        where: {
                                            title: ingredient.measurement
                                        }
                                    })
                                }
                            }).then(async function (createdMeasurement) {
                                if (createdMeasurement) {
                                    const measurementId = createdMeasurement.getDataValue('id')
                                    // Write the measurementId to the recipeIngredient table
                                    createdRecipeIngredient[0].setDataValue('MeasurementId', measurementId)
                                }
                                // Save this
                                return createdRecipeIngredient[0].save()
                            })
                        })
                    }

                    // Adding steps
                    for (const step of steps) {
                        // Check if already exists
                        await Step.count({
                            where: {
                                title: step.title
                            }
                        }).then(async function (count) {
                            // Does already exist
                            if (count > 0) {
                                // Return this data into the function
                                return Step.findOne({
                                    where: {
                                        title: step.title
                                    }
                                })
                            } else {
                                // Create the step and return this
                                return Step.create({
                                    title: step.title,
                                })
                            }
                        }).then(async function (createdStep) {
                            // Add this data into the RecipeStep table
                            return createdRecipe.addStep(createdStep, {through: {photo: step.photo}})
                        })
                    }
                })
            //Once this is all done return to home dashboard
            res.send(recipe)
        } catch(error) {
            res.status(500).send({
                error: "Couldn't create new recipe"
            })
        }
    },

    async show(req,res) {
        try {
            // Find which recipe this is
            const recipeId = req.params.recipeId
            const recipe = await Recipe.findAll({
                where: {
                    id: recipeId,
                },
                include: [
                    {
                        model: Ingredient,
                        through: {attributes: []}
                    },

                    {
                        model: Step,
                    }
                ]
            })

            // Get the ingredients from the recipe

            const theIngredientsPart = recipe.map(function(recipes) {

                const ingredientsSection = recipes.Ingredients

                const theIngredients = ingredientsSection.map(function(ingredients) {
                    return ingredients.id
                })
                return theIngredients

            })

            // Find the RecipeIngredient entries which match the ingredients in the recipe
            // Measurement is associated with this table, so we can get this data from this query
            const recipeIngredient = await RecipeIngredient.findAll({
                where: {
                    IngredientId: {
                        [Op.in]: theIngredientsPart[0]
                    },
                    RecipeId: recipeId
                }, include: {
                    model: Measurement
                }

            })

            // Convert to json so we can manipulate the data
            const json = recipe.map(function(recipeJson) {
                recipeJson = recipeJson.toJSON()

                return recipeJson
            })

            // Set each ingredient to have the amount and measurement data from the RecipeIngredient join table
            for (var key in json[0]['Ingredients']) {
                json[0]['Ingredients'][key]['amount'] = recipeIngredient[key].amount
                json[0]['Ingredients'][key]['measurement'] = recipeIngredient[key].Measurement != null ? recipeIngredient[key].Measurement.title : null
            }

            res.send(json[0])
        } catch(error) {
            res.status(500).send({
                error: error
            })
        }
    }
}
