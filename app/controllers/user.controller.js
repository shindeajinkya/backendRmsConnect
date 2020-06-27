const User = require('../models/user.model')
const Bcrypt = require('bcryptjs')

// Create and Save a new user
exports.create = (req, res) => {
    //Hashing our password for keeping it safe
    req.body.password = Bcrypt.hashSync(req.body.password, 10)
    //Create a User 
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        role: req.body.usercode == "ADMIN420"?'admin':'user',
        phonenumber: req.body.phonenumber,
        email: req.body.email,
    })

    user.save()
    .then(data => {
        res.send({
            data,
            success: true
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error occurred while creating"
        })
    })
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

// Find a single user with a userId
exports.findOne = (req, res) => {
    User.find({ username: req.params.username})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                success: false,
                message: "User not found with username " + req.params.username
            });            
        }
        res.send({
            ...user,
            success: true,
        });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                success: false,
                message: "User not found with username " + req.params.username
            });                
        }
        return res.status(500).send({
            success: false,
            message: "Error retrieving note with username " + req.params.username
        });
    });
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.password) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    // Find note and update it with the request body
    User.findByIdAndUpdate(req.params.userId, {
        username: req.body.username,
        password: req.body.password
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userId
        });
    });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.userId
        });
    });
};

//To Authentic a user via username and password
exports.authenticate = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    if(username && password){
        User.findOne({ username })
        .then(user => {
            resuser = user._doc.username;
            respass = user._doc.password;
            if(!user){
                console.log(username, password, " Not executed");
                return res.status(404).send({
                    success: false,
                    message: "Please enter a valid username and password."
                })
            }
            if(!Bcrypt.compareSync(password, respass)){
                return res.status(404).send({
                    success: false,
                    message: "Please enter a valid password."
                })
            }
            res.send({
                ...user._doc,
                success: true,
            })
        })
        .catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.userId
                });                
            }
            return res.status(500).send({
                message: "Could not find user with username " + username
            });
        })
    }
}

//Updating location data.

exports.updateLocation = (req, res) => {
    var id = req.body.id
    var locationObj = req.body.locationObject
    User.findOneAndUpdate({_id : id }, {location: locationObj}, {new: true})
    .then(user => {
        res.send(user)
    })
    .catch(err => console.log(err))
}

//gathering location data
exports.gatherlocations = (req, res) => {
    User.find({role: {$ne: 'admin'}}, {firstname: 1, lastname: 1, email: 1, location: 1, _id: 1})
    .then(data => {
        res.send({
            data,
            success: true,
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    })
}