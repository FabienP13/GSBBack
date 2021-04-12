const { response } = require("express")
const express = require("express")
const authController = require('../controllers/auth.controller')
let router = express()

router.post('/', (request, response) => {
    let body = request.body
    const result = authController.login(body)
    response.json(result)
})

module.exports = router 