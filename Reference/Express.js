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
                                                    // this is call a rout

app.get('/help', (req,res) => {
    res.send('Help Page')
})
                                                    // another example of an About rout
app.get('/about', (req,res) => {
    res.send('About')
})
/
app.get('/weather',(req,res) => {
    res.send('Weather')
})

                                                   //starts the webserver on port 3000
app.listen(3000, () =>{
    console.log('Server is up on port 3000')
})
