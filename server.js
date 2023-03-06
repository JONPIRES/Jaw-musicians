const express = require('express');
const app = express()

app.set('view engine', 'ejs')


app.get('/', (req,res) =>{
res.render('home')
})


app.get('/*', (req,res) =>{
    res.render('404');
})

app.listen(4000, () =>{
    console.log("listening on port 4000")
})