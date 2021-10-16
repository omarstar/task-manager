const Task = require("../models/tasks.model");

module.exports = class tasksController {
  static getAllTasks = (req, res) => {
    res.send("all items");
  };
  static getTask = (req, res) => {
    res.json({ id: req.params.id });
  };
  static createTask = async (req, res) => {
    try {
      const task = await Task.create(req.body);
      res.status(201).json({ task });
    } catch (err) {
      res.status(500).json({ msg: error });
    }
  };
  static updateTask = (req, res) => {
    res.send("all items");
  };
  static deleteTask = (req, res) => {
    res.send("all items");
  };
};
