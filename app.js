const express = require("express");
const app = express();
require("dotenv").config();
const tasksRouter = require("./routes/tasks.route");
const connectDB = require("./db/connect");
//middleware
app.use(express.json());
//routes
app.get("/", (req, res) => res.send("Hello World!"));
app.use(process.env.ROUTE_PREFIX + "/tasks", tasksRouter);

const port = process.env.PORT | 3000;
const start = async () => {
  try {
    await connectDB();
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  } catch (error) {
    console.log("error connecting DB: ", error);
  }
};
start();
