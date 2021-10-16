const Task = require("../models/tasks.model");

module.exports = class tasksController {
  static getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.status(200).json({ tasks });
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  };
  static getTask = async (req, res) => {
    try {
      const { id: taskID } = req.params; //destruct for security
      const task = await Task.findOne({ _id: taskID });
      if (!task) {
        //always return if condition not to continue
        return res.status(400).json({ msg: `no task with id ${taskID}` });
      }
      res.status(200).json({ task });
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  };
  static createTask = async (req, res) => {
    try {
      const task = await Task.create(req.body);
      res.status(201).json({ task });
    } catch (err) {
      res.status(500).json({ msg: error });
    }
  };

  static updateTask = async (req, res) => {
    try {
      const { id: taskID } = req.params;
      const updatedTask = req.body;
      //options used to return the new updated one, using the validators in schema
      const task = await Task.findOneAndUpdate({ _id: taskID }, updatedTask, {
        new: true,
        runValidators: true,
      });
      if (!task) {
        return res.status(400).json({ msg: `no task with id ${taskID}` });
      }
      res.status(200).json({ task });
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  };

  static deleteTask = async (req, res) => {
    try {
      const { id: taskID } = req.params; //destruct for security
      const task = await Task.findOneAndDelete({ _id: taskID });
      if (!task) {
        //always return if condition not to continue
        return res.status(400).json({ msg: `no task with id ${taskID}` });
      }
      res.status(200).json({ task });
      // res.status(200).send();
      // res.status(200).json({ task:null, status:'success' });
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  };
};
