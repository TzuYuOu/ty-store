const mongoose = require('mongoose');
const Order = require('../models/order');

const sendOrder = async (req, res) => {

  const { items, pickupDate, pickupTime, totalPrice } = req.body;
  const userId = req.user.id;

  try{
    const order = await Order.create({
      userId,
      items,
      pickupDate,
      pickupTime,
      totalPrice
    });

    res.status(200).json({success: true});
  }
  catch(err){
    res.status(400).json({success: false, message: "Create order fail"})
  }
}

const getOrder = async (req, res) => {
  try{
    const orders = await Order.find({
      userId : mongoose.Types.ObjectId(req.user.id)
    })

    res.json(orders);
  }
  catch(err){
    res.status(404).json({error: "Reviews not found"});
  }
}

module.exports = {
  sendOrder,
  getOrder
}
