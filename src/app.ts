'use strict'
require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import deployment from './deployment'
const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  const allowedOrigins: any[] = ['http://localhost:3000'];
  const origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.header("Access-Control-Allow-Origin", origin);

  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, DELETE,X-Access-Token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Create DB connection
const db_options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect(process.env.DB_URL, db_options, (err) => {
  if (err != null) console.log("Connection error:", err);
  else console.log('connection created successfully');
})
app.use('/api', deployment)

app.listen(process.env.PORT, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${process.env.PORT}`);
});
