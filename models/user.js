'use strict'

const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const UserSchema = Schema ({
    country: String,
    display_name: String,
    followers: { type: Number, default: 0},
    user_type: String
})

module.exports = mongoose.model('User', UserSchema)