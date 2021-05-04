const { response } = require("express")
const express = require("express")
const authController = require('../controllers/auth.controller')
let router = express()

router.post('/auth', authController.auth)
module.exports = router 