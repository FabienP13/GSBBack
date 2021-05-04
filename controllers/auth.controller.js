const { response } = require('express')
const userModel = require ('../models/user.model')
var createAccessToken = require('../config/token')

const auth =  (request, response) => {
    userModel.auth(request.body.login, async (err, result) => {
        try {
            if (err) response.json(err)
            if(result[0]) {
                if (request.body.password == result[0].mdp) {
                    const token = await createAccessToken(result[0])
                    response.json({ token })
                } else {
                    response.status(403).send({error: 'Forbidden'})
                }
            }else{
                response.json({ status: "non connecté" })
            }
        } catch (error) {
            console.log(error)
        }

    })

}
module.exports = {
    auth
}