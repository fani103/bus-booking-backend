const express              = require("express");
const { getBuses, seedBuses } = require("../controllers/busController");

const router = express.Router();

router.get("/",      getBuses);
router.get("/seed",  seedBuses);

module.exports = router;