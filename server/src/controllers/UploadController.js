module.exports = {
     upload(req, res) {
        console.log(req)
        res.send(req.file)

     }
}
