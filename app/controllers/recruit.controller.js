const recruitementdata = require('../models/recruit.model')
const User = require('../models/user.model')

exports.create = (req, res) => {
    const recruitesData = new recruitementdata({
        fullname: req.body.fullname,
        secondname: req.body.secondname,
        lastname: req.body.lastname,
        laneone: req.body.laneone,
        lanetwo: req.body.lanetwo,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        country: req.body.country,
        phoneNumber: req.body.phonenumber,
        email: req.body.email,
        birthdate: req.body.birthdate,
        education: req.body.education,
        skills: req.body.skills,
        qualification: req.body.qualification,
        referral: req.body.referral
    });
    recruitesData.save()
    .then(data => {
        if(data.referral){
            User.findOneAndUpdate({_id: data.referral}, {$push: {referrals: data}}, {new: true})
            .then()
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occured while creating"
                })
            })
        }   
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
    recruitementdata.find()
    .then(data => {
        res.send({
            data,
            success: true
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    })
}