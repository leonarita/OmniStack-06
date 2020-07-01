const mongoose = require('mongoose');

const File = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  files: [],
},
{
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

File.virtual('url').get(function () {
  return `http://192.168.15.12:3333/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('File', File);
