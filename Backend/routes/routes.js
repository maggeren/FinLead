const express = require("express");

const router = express.Router();

//-----------------ROOT---------------------
router.get("/", (req, res) => {
  const object = { name: "lars", age: 44 };
  res.json({ mesg: "Get all workouts", person: object });
});

router.post("/", (req, res) => {
  const object = { name: "lars", age: 44 };
  res.json({ mesg: "Get all workouts", person: object });
});

router.put("/:id", (req, res) => {
  const object = { name: "lars", age: 44 };
  res.status(200).json({ Object: object });
});
//------------------------------------------

router.get("/login", (req, res) => {
  const object = { name: "lars", age: 44 };
  res.json({ mesg: "Get all workouts", person: object });
});

router.get("/:id", (res, req) => {
  res.json({ msg: "A single workout" });
});

module.exports = router;
