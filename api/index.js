const { app } = require("express")

const {port, host} = require('./configuration')
const {connectDB} = require('./helpers/db')

connectDB(err => {
    if (err) console.error(err)
    app.listen(port, () => {
        console.log(`API Service is working on port ${port}`)
        console.log(`Host is ${host}`)
    })
})

app.get('/healthtech', (req, res) => res.status(200))

