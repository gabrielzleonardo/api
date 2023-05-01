const { Router } = require("express");
const multer = require("multer");
const ensureAuthentication = require("../middleware/ensureAuthentication");
const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const userRouter = Router();
const uploadConfig = require("../configs/upload");
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
userRouter.post("/", usersController.create);
userRouter.put("/", ensureAuthentication, usersController.update);
userRouter.patch(
  "/avatar",
  ensureAuthentication,
  upload.single("avatar"),
  userAvatarController.update
);

module.exports = userRouter;
