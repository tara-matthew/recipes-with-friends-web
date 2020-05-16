const {
    Measurement
} = require ('../models')

module.exports = {
    async index(req,res) {
        try {
            const measurements = await Measurement.findAll()
            let acceptedMeasurements = {}

            for (var i = 0; i < measurements.length; i ++) {
                acceptedMeasurements[i] = measurements[i].title
            }

            res.send(acceptedMeasurements)
        } catch (err) {
            res.status(500).send({
                error: err
            })
        }
    }
}