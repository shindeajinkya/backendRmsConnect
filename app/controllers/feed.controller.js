const Feedback = require('../models/feed.model')
const User = require('../models/user.model')

exports.create = (req, res) => {
    const feedback = new Feedback({
        subject: req.body.subject,
        description: req.body.description,
        userid: req.body.userid,
        username: req.body.username,
    });
    feedback.save()
    .then(data => {
        User.findOneAndUpdate({_id: req.body.userid}, {$push: {feedbacks: data}}, {new: true})
        .then()
        .catch(err => console.log(err))
        res.send({
            data,
            success: true
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while creating"
        })
    })
}

exports.findAll = (req, res) => {
    Feedback.find({}, {"subject": 1, "description": 1, "_id":1, "username": 1})
    .then(feedbacks => res.send(feedbacks))
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    })
}