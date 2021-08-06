const mongoose = require('mongoose');
const Item = require('../models/item');

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  }
  catch(err){
    res.status(404).json({error: err});
  }
}

module.exports = {
  getAllItems
}
