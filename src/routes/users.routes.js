const { Router } = require("express");
const ensureAuthentication = require("../middleware/ensureAuthentication");
const UsersController = require("../controllers/UsersController");
const userRouter = Router();

const usersController = new UsersController();
userRouter.post("/", usersController.create);
userRouter.put("/", ensureAuthentication, usersController.update);

module.exports = userRouter;
