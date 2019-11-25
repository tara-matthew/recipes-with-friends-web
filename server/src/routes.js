const AuthenticationController = require ('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require ('./policies/AuthenticationControllerPolicy')
const UploadController = require ('./controllers/UploadController')
const RecipeController = require ('./controllers/RecipeController')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)

    app.post('/upload',
        UploadController.upload
    )

    app.post('/recipes',
        RecipeController.post)

    app.get('/recipes',
        RecipeController.index)

    app.get('/recipes/:recipeId',
        RecipeController.show)

}
