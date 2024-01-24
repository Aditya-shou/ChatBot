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
const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
    "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
  }

app.use(bodyParser.json()); // To get data in json format
app.use(cors()); // to connect express middle ware


app.post('/chat',async(req,res)=>{
    const prompt = req.body;
    console.log(prompt.messages)

    const completion = await openai.chat.completions.create({
        model : "gpt-3.5-turbo",
        messages: prompt.messages,
    });
    console.log(completion)
    res.json({
        completion: completion});
})


const PORT = 8020;

app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`));




