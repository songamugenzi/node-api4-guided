const router = require("express").Router();

const Shouts = require("./shouts-model.js");

const { isValid } = require("./shouts-service.js");

router.get("/", (req, res, next) => {
  Shouts.find()
    .then((shouts) => {
      res.status(200).json(shouts);
    })
    .catch((error) => next(error));
});

router.post("/", (req, res, next) => {
  // validate data *** BEFORE *** sending it to the database

  const shoutData = req.body;

  const validation = isValid(shoutData);

  if (validation.successful) {
    Shouts.add(req.body)
      .then((shout) => {
        res.status(201).json(shout);
      })
      .catch((error) => next(error));
  } else {
    res.status(400).json({ message: validation.message });
  }
});

router.delete("/:id", (req, res) => {
  Shouts.remove(req.params.id)
    .then((count) => {
      if (count) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "not found" });
      }
    })
    .catch((error) => next(error));
});

module.exports = router;
