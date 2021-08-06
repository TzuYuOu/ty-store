const mongoose = require('mongoose');
const Order = require('../models/order');

const sendOrder = async (req, res) => {

  const { userId, items, pickupDate, pickupTime, totalPrice } = req.body;

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
    next(err);
  }
}

module.exports = {
  sendOrder
}
