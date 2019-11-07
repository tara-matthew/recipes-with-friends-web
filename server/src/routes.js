const AuthenticationController = require ('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require ('./policies/AuthenticationControllerPolicy')
const UploadController = require ('./controllers/UploadController')
const multer = require('multer')
const upload = multer( { dest: 'uploads/' } );

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)


    app.post( '/upload', upload.single( 'file' ),
        UploadController.upload
    )
    // app.post('/upload',
    //     UploadController.upload)
}
