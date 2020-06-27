module.exports = (app) => {
    const location = require('../controllers/location.controller')

    app.post('/location', location.create);
}