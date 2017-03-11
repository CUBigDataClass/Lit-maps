//Making the assumption that we are using mongodb and mongoose just so I can get some basic work done.
// This can easily be changed later.
const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
  name: String,
  artist: String,
  rank: Number,
  albumCover: String
}, { timestamps: true })

const Song = mongoose.model('Song', songSchema)
module.exports = Song
