const todoModel = require("./../..//db/models/todo");


//////////////////////////////////////////////

const createTodo = (req, res) => {
  const task = req.body.task;
  const newTodo = new todoModel({
    task,
  });

  newTodo
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

//////////////////////////////////////////////

const getAllTodo = (req, res) => {
  todoModel
    .find({ isDel: false })
    .select("task timeStamp")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
/////////////////////////////////////////////////

const getTodoById = (req, res) => {
  const { id } = req.params;
  todoModel
    .find({ _id: id, isDel: false })
    .then((result) => {
      if (result){
        res.status(200).json(result);
      } else {
        res.status(404).json("Task does not exist");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
/////////////////////////////////////////////////

const getCompletedTodos = (req, res) => {
  todoModel
    .find({ isDel: false, isCompleted: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

/////////////////////////////////////////////////

const completeTodo = (req, res) => {
  const { id } = req.params;

  todoModel
    .findOne( id , { isCompleted: true })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
/////////////////////////////////////////////////
const updateTodo = (req, res) => {
  const id = req.params.id;
  const task = req.body.task;
  // const newTask = req.body.task;

  todoModel
    .findOneAndUpdate({ _id: id }, { task: task })
    .then((result) => {
      if (result) {
        res.status(200).json("Task is updated");
      } else {
        res.status(404).json("Task has not been found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const deleteTodo = (req, res) => {
  const { id } = req.params;

  todoModel
    .findOneAndUpdate({ _id: id }, { isDel: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  createTodo,
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  completeTodo,
  updateTodo,
  deleteTodo,
};
