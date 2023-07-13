const { Router } = require("express");
const controllers = require("../controllers");
const { filmsValidation } = require("../middlewares");

const router = Router();

router.get("/", controllers.getFilm);

router.post("/", filmsValidation, controllers.createFilm);

module.exports = router;
