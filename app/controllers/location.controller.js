const UserLocation = require('../models/location.model')

//Post location data to database
exports.create = (req, res) => {
    const location = new UserLocation({
        coords: req.body.coords,
        mocked: req.body.mocked,
        timestamp: req.body.timestamp,
    })

    location.save()
    .then(data => res.send(data))
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occured"
        })
    })
};