const { Ip } = require("../models/ip");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const address = req.headers['x-forwarded-for'] || req.socket.remoteAddress ||

  await Ip.create({ address: address });

  res.send('Hello World!');
});


module.exports = router;