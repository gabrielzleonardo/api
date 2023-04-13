const { Router } = require("express");
const TagsController = require("../controllers/TagsController");
const tagsRoutes = Router();

const ensureAuthentication = require("../middleware/ensureAuthentication");

const tagsController = new TagsController();
tagsRoutes.get("/", ensureAuthentication, tagsController.index);

module.exports = tagsRoutes;
