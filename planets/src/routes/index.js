const { Router } = require("express");
const controllers = require("../controllers");
const { planetsValidate } = require("../middelwares");

const router = Router();

router.get("/", controllers.getPlanets);

router.post("/", planetsValidate, controllers.createPlanets);

module.exports = router;
