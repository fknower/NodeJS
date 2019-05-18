npm i express@4.16.4                                                  installs express


const express = require('express')
const app = express()
                                                    // when localhost:3000 is typed in the browser. It is assigned to req (request)
                                                    // then res (response) 'Hello Express is desplayed in the browser'
app.get('',(req, res) => {
    res.send('Hello express')
})

                                                    // when "localhost:3000/help" is typed in the browser. It is assigned to req (request)
                                                    // then res (response) 'Hello Express is desplayed in the browser'
                                                    // this is call a route

app.get('/help', (req,res) => {
    res.send('Help Page')
})
                                                    // another example of an About rout
app.get('/about', (req,res) => {
    res.send('About')
})
                                                   //example with weather rout
app.get('/weather',(req,res) => {
    res.send('Weather')
})
                                                   //HTML sent to browser
app.get('/html',(req,res) => {
    res.send('<h1>Hello express</h1>')
})

                                                  // example of JSON being sent to the browser
app.get('/JSON',(req,res) => {
    res.send({
        name: 'Andrew',
        age: 27
    })
})
                                                // example of a array being sent
app.get('/JSON',(req,res) => {
    res.send([{
        name: 'Andrew',
        age: 27
    },{name:'Jane',
       age: 30
    }])
})
                                              // matches any page 
app.get('*',(req,res)=>{
res.send('My 404 page')
})
                                                  //starts the webserver on port 3000
app.listen(3000, () =>{
    console.log('Server is up on port 3000')
})
