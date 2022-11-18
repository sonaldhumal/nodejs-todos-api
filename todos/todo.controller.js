const { Router } = require("express");
const { getTodos } = require("./todo.service");

const todoRouter = Router();

todoRouter.get("/", async (req, res, next) => {
  getTodos()
    .then((data) => {
      return res.send(data);
    })
    .catch((e) => {
      return res.status(500).send(e);
    });
});

module.exports = todoRouter;
