const { Ip } = require("../models/ip");
const express = require("express");
const logger = require("../startup/logger");
const router = express.Router();

router.get("/", async (req, res) => {
  const address = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  logger.info(address);

  logger.flush()

  await Ip.create({ address: address });

  res.send('Hello World!');
});


module.exports = router;