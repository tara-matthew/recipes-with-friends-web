const AuthenticationController = require ('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require ('./policies/AuthenticationControllerPolicy')
const UploadController = require ('./controllers/UploadController')
const RecipeController = require ('./controllers/RecipeController')
const BookmarkController = require ('./controllers/BookmarkController')

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

    app.post('/bookmarks',
        BookmarkController.post)

    app.get('/bookmarks',
        BookmarkController.index)

    app.delete('/bookmarks/:bookmarkId',
        BookmarkController.delete)

}
