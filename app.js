const express = require("express");
const app = express();
require("dotenv").config();
const tasksRouter = require("./routes/tasks.route");
//middleware
app.use(express.json());
//routes
app.get("/", (req, res) => res.send("Hello World!"));
app.use(process.env.ROUTE_PREFIX + "/tasks", tasksRouter);

const port = process.env.PORT | 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
