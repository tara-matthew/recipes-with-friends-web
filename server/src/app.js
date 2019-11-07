console.log('hello')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
const multer = require('multer')
const upload = multer( { dest: 'uploads/' } );

const UploadController = require ('./controllers/UploadController')


const app = express()

app.post( '/upload', upload.single( 'file' ), function( req,res) {
    console.log(req.file)
    UploadController.upload(req,res)
})

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(multer)



require ('./routes')(app)

sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)

    })
