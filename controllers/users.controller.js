const { response } = require('express')
const userModel = require ('../models/user.model')


const addUser = (request, response) => {
    const user = {
       id: request.body.id,
       nom: request.body.nom, 
       prenom: request.body.prenom, 
       login: request.body.login, 
       mdp: request.body.mdp, 
       adresse: request.body.adresse, 
       cp: request.body.cp, 
       ville:  request.body.ville, 
       date :request.body.dateEmbauche, 
       role: request.body.role
    }
    userModel.addUser(user, (err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
}

const updateUser = (request, response) => {
    const user = {
        nom: request.body.nom, 
        prenom: request.body.prenom, 
        login: request.body.login, 
        mdp: request.body.mdp, 
        adresse: request.body.adresse, 
        cp: request.body.cp, 
        ville:  request.body.ville, 
        date :request.body.dateEmbauche, 
        role: request.body.role
     }
     userModel.updateUser(request.params.id, user, (err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })

}

const deleteUser = (request, response) => {
    userModel.deleteUser(request.params.id, (err, result) => {
        if (err) response.json(err)
        else response.json({result})
    })
    
}
module.exports = {
    addUser,
    updateUser,
    deleteUser
}