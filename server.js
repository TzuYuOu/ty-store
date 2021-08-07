const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const itemRoute = require('./routes/item-route');
const authRoute = require('./routes/auth-route');
const orderRoute = require('./routes/order-route');

// env settings
dotenv.config();

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors())

// routes
app.use('/api/item', itemRoute);
app.use('/api/auth', authRoute);
app.use('/api/order', orderRoute);

// const
const DB_URL = process.env.DB_URL;
const port = process.env.PORT || 5000;

// connect to mongodb
mongoose.connect(DB_URL, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
  .then((res) => {
    app.listen(port, () => {
      console.log(`Listening on ${port}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })