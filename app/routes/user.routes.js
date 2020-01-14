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
}