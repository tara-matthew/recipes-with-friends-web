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
                    console.log(req)
                    return res.send('success')
                }
            })
        } catch (err) {
            res.status(400).send({
                error: 'Something went wrong'
            })
        }
    }
}
