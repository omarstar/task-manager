const mongoose = require("mongoose");

const conn_URL = process.env.MONGO_URI;

const connectDB = (url) => {
  return mongoose.connect(conn_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
