// main router file
const express = require("express");
const router = express.Router();
// const axios = require('axios');

const { readCityInfo, addCityInfo, updateCityInfo, deleteCityInfo } = require("../controllers/cityInfoApi");

router.get( "/city", readCityInfo)
// router.route('/city/:cityName').get(readCityInfo);

router.post("/cities", addCityInfo);

// axios.post()

router.put('/city/:name', updateCityInfo);

router.delete('/city/:name', deleteCityInfo);

module.exports = router;
