const express = require("express")
const app = express();

const greeting = "Hello, stranger"

app.get("/greeting", (req, res) => {
  res.send(greeting)
});

app.get("/greeting/:name", (req, res) => {
    res.send("Hello Jimmy! It's so great to see you!" );
});

app.get('/greeting/Jimmy-boy',(req, res) => {
      res.send("Wow! Hello there, Jimmy-boy");
  });

  app.get('/tip/:total/:tipPercentage', (req, res) => {
    const ans = parseInt(req.params.total) * parseInt(req.params.tipPercentage)/100
    res.status(200).json({msg: `${ans}`})
});

app.get('/magic/:question', (req, res) => {
  const question = req.params.question
  const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
  const randomAnswer = Math.floor(Math.random() * answers.length)
  const chooseAnswer = answers[randomAnswer]
  res.send(`<h1>Question: ${question}?</h1>
  <h1>Answer: ${chooseAnswer}.</h1>`)
});

  app.listen(3000, () => {
    console.log('Listening on Port 3000')
})