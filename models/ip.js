const mongoose = require('mongoose');

const ipSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Ip = mongoose.model('Ip', ipSchema);

exports.ipSchema = ipSchema;
exports.Ip = Ip; 