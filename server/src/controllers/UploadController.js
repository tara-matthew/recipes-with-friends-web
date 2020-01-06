const multer = require('multer')
const uploadDest = multer({
    dest: 'uploads/'
}).single('file');

module.exports = {
    async upload(req,res) {
        try {
            await uploadDest(req, res, function(err) {
                if (err) {
                    return res.send('fail')
                } else {
                    return res.send(req.file.path)
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
