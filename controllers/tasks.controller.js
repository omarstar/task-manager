module.exports = class tasksController {
  static getAllTasks = (req, res) => {
    res.send("all items");
  };
  static getTask = (req, res) => {
    res.json({ id: req.params.id });
  };
  static createTask = (req, res) => {
    res.json(req.body);
  };
  static updateTask = (req, res) => {
    res.send("all items");
  };
  static deleteTask = (req, res) => {
    res.send("all items");
  };
};
