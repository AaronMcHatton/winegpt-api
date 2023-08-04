const openaiService = require('../services/chatgpt.js')

class recommendationsController {
    
    async getRecommendation(flavors) {
        if(!flavors) {
            return "You must have flavors"
        }

        const response = await openaiService.createChatCompletion(
            {model: process.env.MODEL,
            messages:[
                {
                    "role": "user", 
                    "content": `I'm a big fan of these flavors: ${flavors}. 
                        Please give me a recommendation for a wine based on this. Please respond with a list
                        of the top 5 selections in the order of recommendation and the percentage match that they would represent. 
                        These 5 percentages should add up to 100 percent and the highest percentage would be 1st. Can you also include a short 
                        description of why you picked each? Thank you!
                        My selection is limited to the following: 
                        Rose of Syrah, Rose of Grenache, Rose of Tempranillo, Viognier,
                        Sparkling Cuvee Sec Dry, Sparkling Demi Sec Sweet, Tempranillo,
                        Meritage, Sangiovese/Cabernet Sauvignon Blend, Sauvignon / Syrah Blend, 
                        Amarone, Pinot Noir, Pinot Grigio, Sauvignon Blanc,
                        Cabernet Sauvignon, Merlot, Chardonnay.`
                    },
            ],
            temperature:1,}
        )
        return response.data.choices[0].message.content
    }

    async getImage(prompt) {
        if(!prompt) {
            return "You must have a prompt"
        }

        const response = await openaiService.createImage(
            {prompt,
                n: 1,
                size: "512x512",}
        )
        return response.data.data[0].url

    }

}

module.exports = new recommendationsController()