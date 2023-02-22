const express = require('express');
const { json, urlencoded } = require('express');
const app = express();
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
const port = process.env.PORT || 4400;

app.use(json());
app.use(urlencoded({ limit: '50mb', extended: true }));

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function runCompletion(question) {
    return new Promise(async (resolve, reject) => {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: question,
            temperature: 0,
            max_tokens: 2048,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            //stop: ["\"\"\""],
        });
        resolve(completion.data.choices[0].text)
    })
}

app.post('/ai', async (req, res, next) => {
    let getAnswer = await runCompletion(req.body.qn)
    res.send(getAnswer)
    //runCompletion();
})

app.listen(port, () => {
    console.log(`started server on PORT: ${port}`)
})





