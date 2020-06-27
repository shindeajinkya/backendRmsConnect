module.exports = (app) => {
    const recruitments = require('../controllers/recruit.controller')

    app.post('/submitrecruit', recruitments.create)

    app.post('/giveallrecruits', recruitments.findAll)
}