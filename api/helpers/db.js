const mongoose = require('mongoose')
const {db} = require('./../configuration')

const connectDB = cb => mongoose.connect(db, cb)

module.exports.connectDB = connectDB