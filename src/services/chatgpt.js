const openai = require('openai')
const configuration = new openai.Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
});
const openaiService = new openai.OpenAIApi(configuration);

module.exports = openaiService