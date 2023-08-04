const express = require('express')
const recommendationsController = require('../controllers/recommendations.controller.js')
const recommendations = express.Router()

recommendations.post('/tasting', async (req, res)=>{
    const rec = await recommendationsController.getTastingRecommendation(req.body.flavors)
    res.status(200).send({
        statusCode: 200,
        message: rec
    })
})

recommendations.post('/single', async (req, res)=>{
    const rec = await recommendationsController.getSingleRecommendation(req.body.flavors)
    res.status(200).send({
        statusCode: 200,
        message: rec
    })
})

module.exports = recommendations