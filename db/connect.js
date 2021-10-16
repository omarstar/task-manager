const mongoose = require("mongoose");

const conn_URL =
  "mongodb+srv://star-user:5T@rU53r@star-lab.q7ctf.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(conn_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
