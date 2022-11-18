const { json, urlencoded } = require("express");
const express = require("express");
const todoRouter = require("./todos/todo.controller");
const userRouter = require("./user/user.controller");
const app = express();
const port = 3000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/todos", todoRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
