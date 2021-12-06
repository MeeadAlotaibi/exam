const express = require("express");
const {
  createTodo,
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  completeTodo,
  updateTodo,
  deleteTodo,
} = require("./../controllers/todos");

const todoRouter = express.Router();

todoRouter.get("/todos", getAllTodo);

todoRouter.get("/todo/:id", getTodoById);

todoRouter.get("/todos", getCompletedTodos);

todoRouter.post("/todos", createTodo);

todoRouter.get("/todos/:id", completeTodo);

todoRouter.put("/todo/:id", updateTodo);

todoRouter.delete("/delete/:id", deleteTodo);

module.exports = todoRouter;
