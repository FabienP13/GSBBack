const express = require("express")

const routerFiches = require('./routers/fichedefray.router')
const routerUsers = require('./routers/users.router')
const routerLogin = require('./routers/authentification.router')
const routerFrais = require('./routers/fichedefray.router')
const routerFiles = require('./routers/files.router')
let api = express()

api.get('/', (requests, response) => {
    response.json({status:'ok'})
})

api.use(express.json())
api.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
})

api.use('/users', routerUsers)
api.use('/fiches', routerFiches)
api.use('/login', routerLogin)
api.use('/fraisforfait', routerFrais)
api.use('/pictures', routerFiles)

const PORT = process.env.PORT || 3001;

api.listen(3001)