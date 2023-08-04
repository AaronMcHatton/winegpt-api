const openaiService = require('../services/chatgpt.js')

class recommendationsController {
    
    async getTastingRecommendation(flavors) {
        if(!flavors) {
            return "You must have flavors"
        }

        const response = await openaiService.createChatCompletion(
            {model: process.env.MODEL,
            messages:[
                {
                    "role": "user", 
                    "content": `I'm a big fan of these flavors: ${flavors}. 
                        Please play the roll of a world class somlier. Please give me a recommendation for a wine flight based on this. Please respond with a list
                        of the top 5 selections in the order that I should drink them to maximize my tasting experience. There should be one wine that will provide an opportunity for me 
                        to taste something that doesn't necessarily fall into my flavor profile but could be enjoyable. This wine could fall anywhere within the tasting spectrum (places 1 through 5).
                        These 5 wines should go from lightest to boldest.  
                        Can you also include a short description of why you picked each? 
                        Also, please provide an estimated percentage match for my pallate. Thank you!
                        My selection is limited to the following wines: 
                        Rose of Syrah, Rose of Grenache, Rose of Tempranillo, Viognier,
                        Sparkling Cuvee Sec Dry, Sparkling Demi Sec Sweet, Tempranillo,
                        Meritage, The Texan (Sangiovese/Cabernet Sauvignon Blend), Signature(Sauvignon/Syrah Blend), 
                        Amarone, Pinot Noir, Pinot Grigio, Sauvignon Blanc,
                        Cabernet Sauvignon, Merlot, Chardonnay. 
                        Please answer in the following JSON object format: [{"number": int, "name": string, "percentage", description": string}] and do not include the newline character`
                    },
            ],
            temperature:1,}
        )
        const jsonResponse = JSON.parse(response.data.choices[0].message.content)
        return jsonResponse
    }

    async getSingleRecommendation(flavors) {
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
                        of the top 3 selections in the order of recommendation and the percentage match that they would represent. 
                        These 3 percentages should add up to 100 percent and the highest percentage would be 1st. Can you also include a short 
                        description of why you picked each? Thank you!
                        My selection is limited to the following: 
                        Rose of Syrah, Rose of Grenache, Rose of Tempranillo, Viognier,
                        Sparkling Cuvee Sec Dry, Sparkling Demi Sec Sweet, Tempranillo,
                        Meritage, The Texan (Sangiovese/Cabernet Sauvignon Blend), Signature(Sauvignon/Syrah Blend), 
                        Amarone, Pinot Noir, Pinot Grigio, Sauvignon Blanc,
                        Cabernet Sauvignon, Merlot, Chardonnay. Please answer in the following JSON object format: [{"name": string, "percentage": int, "description": string}] and do not include the newline character`
                    },
            ],
            temperature:1,}
        )
        const jsonResponse = JSON.parse(response.data.choices[0].message.content)
        return jsonResponse
    }

}

module.exports = new recommendationsController()