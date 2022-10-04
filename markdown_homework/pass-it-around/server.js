const express = require("express");
const app = express();

let numOfBottles = 99

app.get("/", (req, res) => {
    res.send(`<h1>${numOfBottles} Bottles of beer on the wall</h1>
    <h2><a href=${numOfBottles-1}> take one down, pass it around</a></h2>`)
  });
  
app.get("/:number_of_bottles", (req, res) => {
  if(res.send(`<h1>${req.params.number_of_bottles} Bottles of beer on the wall.</h1><br>
  <h2><a href=${numOfBottles-1}> take one down, pass it around</a></h2>`))
});

app.listen(3000, () => {
    console.log('Listening on Port 3000')
})