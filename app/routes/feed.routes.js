module.exports = (app) => {
    const feedbacks = require('../controllers/feed.controller')

    app.post('/feedback', feedbacks.create)

    app.post('/allfeeds', feedbacks.findAll)
}