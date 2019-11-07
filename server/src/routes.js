const AuthenticationController = require ('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require ('./policies/AuthenticationControllerPolicy')
const UploadController = require ('./controllers/UploadController')


module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)


    app.post('/upload',
        UploadController.upload
    )
    // app.post('/upload',
    //     UploadController.upload)
}
