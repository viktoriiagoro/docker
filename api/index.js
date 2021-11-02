const {port, host} = require('./configuration')
const {connectDB} = require('./helpers/db')
const bodyParser = require('body-parser')
const {User} = require('./models/user')
const express = require('express')

const app = express()

connectDB(err => {
    if (err) console.error(err)
    app.listen(port, () => {
        console.log(`API Service is working on port ${port}`)
        console.log(`Host is ${host}`)
    })
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/healthcheck', (req, res) => res.status(200).json({ isOk: true }))

// create user
app.post('/users', async (req, res) => {
    try {
        const { firstName, lastName } = req.body
        if (!firstName || !lastName) {
            res.status(400).send('Bad Request')
            return
        }
        const user = new User({ firstName, lastName })
        await user.save()
        res.status(201).json(user)
    } catch (err){
        res.send({err})
    }

})

// create all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err){
        res.send({err})
    }

})
