const { Router } = require("express");
const controllers = require("../controllers");
const middleware = require("../middelwares");
const middelwares = require("../middelwares");
const router = Router();

router.get("/", controllers.getCharacters);

router.post("/", middelwares.characterValidation, controllers.createCharacters);

module.exports = router;
