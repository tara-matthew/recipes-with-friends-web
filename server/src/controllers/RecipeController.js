const {Recipe, Ingredient, Step, RecipeIngredient} = require ('../models')
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
            var ingredients = req.body.splitIngredients
            console.log(req.body)
            // var steps = req.body.steps

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
                            // console.log(createdRecipe.getDataValue('id'))
                            console.log(createdRecipeIngredient[0].getDataValue('RecipeId'))
                            // console.log(createdRecipeIngredient.RecipeId)
                            const recipeId = createdRecipeIngredient[0].getDataValue('RecipeId')
                            const ingredientId = createdRecipeIngredient[0].getDataValue('IngredientId')
                            // console.log(recipeId, ingredientId)
                            const recipeIngredient = await RecipeIngredient.findOne({
                                where: {
                                    RecipeId: recipeId,
                                    IngredientId: ingredientId
                                }
                            })
                            // console.log(recipeIngredient)
                            return recipeIngredient
                            // console.log(recipeIngredient)
                            }).then(async function(theRecipeIngredient) {
                                console.log(theRecipeIngredient)
                                // console.log(theRecipeIngredient.getDataValue('RecipeId'))
                                theRecipeIngredient.setDataValue('MeasurementId', 2)
                                // theRecipeIngredient.save();
                                // console.log(theRecipeIngredient)
                                return theRecipeIngredient.save()
                                // theRecipeIngredient.MeasurementId = 1
                            }).then (async function(saved) {
                                console.log(saved)
                            })
                    }

                    // Adding steps
                //     for (const step of steps) {
                //         // Check if already exists
                //         await Step.count({
                //             where: {
                //                 title: step.title
                //             }
                //         }).then(async function (count) {
                //             // Does already exist
                //             if (count > 0) {
                //                 // Return this data into the function
                //                 return Step.findOne({
                //                     where: {
                //                         title: step.title
                //                     }
                //                 })
                //             } else {
                //                 // Create the step and return this
                //                 return Step.create({
                //                     title: step.title,
                //                 })
                //             }
                //         }).then(async function (createdStep) {
                //             // Add this data into the RecipeStep table
                //             return createdRecipe.addStep(createdStep, {through: {photo: step.photo}})
                //         })
                //     }
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
