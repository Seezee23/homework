const express = require('express')
const app = express()


app.get('/', (req, res) => {
    //for loop
    //if
    // var
    //
    res.status(200).json({msg: 'hello universe'})
})

app.get('/superman', (req, res) => {
    res.status(200).json({ msg: 'You ain\'t fooling no one with them glasses Clark'})
})

app.get('/:num1/:num2',(req, res) => {
  const ans = parseInt(req.params.num1) + parseInt(req.params.num2)
  res.status(200).json({msg: `The answer is ${ans}`})
})
// .sendFile(somehtml file)
// .sendFile(somecss)
// .render()


app.listen(3000, () => {
    console.log('I am listening to all requests now on port 3000')
})