const express = require("express");
const { getBuses, seedBuses } = require("../controllers/busController");

const router = express.Router();

router.get("/",    getBuses);
router.post("/seed", seedBuses);

module.exports = router;