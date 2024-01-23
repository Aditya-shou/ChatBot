const express = require("express")
const cors = require("cors")

const bodyParser = require("body-parser");

const  Configuration  = require("openai");
const OpenAIApi = require("openai")

const config  = new Configuration({
    apiKey: "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",
})

const openai = new OpenAIApi(config);
const app = express();

app.use(bodyParser.json()); // To get data in json format
app.use(cors()); // Provice connect express middle ware


app.post('/chat',async(req,res)=>{
    const {prompt} = req.body;
    console.log(prompt)

    const completion = await openai.chat.completions.create({
        model : "gpt-3.5-turbo",
        messages: [{role:"user",content:prompt}],
        max_tokens: 100,
    });
    console.log(completion)
    res.json({
        completion: completion.choices[0].message});
})


const PORT = 8020;

app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`));




