const multer = require('multer')
const path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../../client/uploads"))
},
filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
})
 var uploadDest = multer({ storage: storage }).single('file');

module.exports = {
    async upload(req,res) {
        try {

            await uploadDest(req, res, function(err) {
                if (err) {
                    return res.send('fail')
                } else {
                    return res.send(req.file.filename)
                    // return res.send(`You have uploaded this image: <hr/><img src="${req.file.path}" width="500"><hr /><a href="./">Upload another image</a>`)
                }
            })
        } catch (err) {
            res.status(400).send({
                error: 'Something went wrong'
            })
        }
    }
}
