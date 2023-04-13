const { Router } = require("express");
const NotesController = require("../controllers/NotesController");
const notesRoutes = Router();
const ensureAuthentication = require("../middleware/ensureAuthentication");

notesRoutes.use(ensureAuthentication);


const notesController = new NotesController();
notesRoutes.get("/", notesController.index);
notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;
