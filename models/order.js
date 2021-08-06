const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderSchema = new Schema({

  userId: { type: Schema.Types.ObjectId, ref:'User', required: true},
  items: [],
  pickupDate: {
    type: Date, 
    default: Date.now()
  },
  pickupTime:{
    type: String
  },
  totalPrice: {
    type: Number,
    default: 0
  },
  
  
});

module.exports = mongoose.model('Order', orderSchema);