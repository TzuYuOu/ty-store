const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  price: {
    type: Number, 
    required: true
  },
  quantity: {
    type: Number, 
    required: true, 
    default: 1
  },
  image: {type: String}
})

module.exports = mongoose.model('Item', itemSchema);