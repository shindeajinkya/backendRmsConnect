module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new User
    app.post('/user', users.create);

    // Retrieve all users
    app.get('/user', users.findAll);

    // Retrieve a single user with userId
    app.get('/user/:username', users.findOne);

    // Update a user with userId
    app.put('/user/:userId', users.update);

    // Delete a user with userId
    app.delete('/user/:userId', users.delete);

    //To authenticate a user
    app.post('/auth', users.authenticate);

    //To update location
    app.post('/updatelocation', users.updateLocation)

    //To gather location data
    app.post('/gatherlocations', users.gatherlocations)
}

// {"_id":{"$oid":" "},"username":"Ajinkya","password":"$2a$10$BCV14TILvWB3LNGbbf/wtOcJZcUbrgZSV/RoICVAcIEU4LVN6uhTe","firstname":"Ajinkya","middlename":"Ajit","lastname":"Shinde","createdAt":{"$date":"2020-01-29T05:30:29.173Z"},"updatedAt":{"$date":"2020-01-29T05:30:29.173Z"},"__v":0}