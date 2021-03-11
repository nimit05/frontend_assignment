const {Router} = require('express')
const route = Router()
const {a} = require('../../db')

route.get('/academy' , (req,res) => {
    try {
        const aca = a;
        res.status(200).send(aca);
    } catch (error) {
        res.send(404).send(error.message)
    }
})

module.exports = {route}