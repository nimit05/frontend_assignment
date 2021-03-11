const {Router} = require('express')
const route = Router()
const {acad} = require('../../../backend/db')

route.post('/create' , async(req,res) => {
    try {
        const a = req.body;
        const aca = await acad.create({
            Name : a.Name,
            Open : a.Open,
            Price : a.Price,
            Players : a.Players
        })
        res.status(200).send(aca)
    } catch (error) {
        res.status(404).send(error.message)
    }
  
})

route.get('/academy' , async(req,res) => {
    try {
        const aca = await acad.findAll();
        res.status(200).send(aca);
    } catch (error) {
        res.send(404).send(error.message)
    }
})

module.exports = {route}