## index.js
- import Morgan
- dotenv.config();
- dowenlaod mongoose bakage
- import mongoose 
- import todoRouter top the middelware
- app.use(cors); ===> app.use(cors());
- app.use(todoRouter); should be under all app.use



## db ,, index.js
- import dotenv
- configratin dotenv
- import DB_URL
- ```.catch((err) => {
    console.log("DB connected");
  }); ===> .catch((err) => {
    console.log(err);
  });```

## models index.js
- ``` const mongoose = require("mongose");``` ===> ```const mongoose = require("mongoose");```
- task type should be String 
- expoert the schema should be ```module.exports = mongoose.model("Todo", todoSchema);```
- and delete ``module.exports = todoModel;``

## controller todos.js 
- const todoModel = require("./../..//db/models/todo"); ===> todos missing(s) 
- function createTodo suold be first 
- ```const todo = req.body.todo;``` ===> ```const task = req.body.task;```
- in function getTodoById ,, i  changed from query to params
-  in function getTodoById ,, change from findOne to find
- delete findOneAndUpdate and put findOne
- in function completeTodo ,, delete ==>  ```{ new: true }```
- in function updateTodo ,, put ```const task = req.body.task;```
- put ```const id = req.params.id;```
delete ```const newTask = req.body.task;``` put ```const isDel = req.body.isDel;```
and change ```{ isDel: false }```
- put inside .then() ==> ```if (result) {
        res.status(200).json("Task is updated"); 
      } else {
        res.status(404).json("Task has not been found"); }```
      
- export updateTodo
- module.exports was missing (s)

## routes  todos.js

- ```todoRouter.get("/todo/:id", getTodoById);```
- ```todoRouter.put("/todo/:id", updateTodo);```

-
