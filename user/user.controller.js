const { Router } = require('express');
const { getUserWithTodos } = require('./user.service');

const userRouter = Router();

userRouter.get('/:user_id', (req, res, next) => {
	getUserWithTodos(req.params.user_id)
		.then((data) => {
			return res.send(data);
		})
		.catch((e) => {
			res.status(500).send(e);
		});
});

module.exports = userRouter;
