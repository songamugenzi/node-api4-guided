const express = require("express");

const shoutsRouter = require("../shouts/shouts-router.js");

const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  const message = process.env.MESSAGE;

  res.status(200).json({ message });
});

router.use("/shouts", shoutsRouter);

router.use(errorHandler);

function errorHandler(error, req, res, next) {
  // do something with error before responding
  // like saving it to a database, sending a mail to the admin
  // or using an external logging service
  res.status(500).json(error.message);
}

module.exports = router;
