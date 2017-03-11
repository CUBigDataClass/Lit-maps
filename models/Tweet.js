//Making the assumption that we are using mongodb and mongoose just so I can get some basic work done.
// This can easily be changed later.
const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
  songID: {type: mongoose.Schema.Types.ObjectId, ref: 'Song'},
  lat: String,
  long: String,
  date: Date,
  sentiment: Number
}, { timestamps: true })

const Tweet = mongoose.model('Tweet', tweetSchema)
module.exports = Tweet
