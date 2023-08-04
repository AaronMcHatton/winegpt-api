const express = require('express')
const recommendationsController = require('../controllers/recommendations.controller.js')
const recommendations = express.Router()

recommendations.post('/recommend', async (req, res)=>{
    const rec = await recommendationsController.getRecommendation(req.body.flavors)
    res.status(200).send({
        statusCode: 200,
        message: rec
    })
})

recommendations.post('/image', async (req, res)=>{
    const img = await recommendationsController.getImage(req.body.prompt)
    res.status(200).send({
        statusCode: 200,
        message: img
    })
})

module.exports = recommendations