const express = require("express");

const router = express.Router();

router.get("/", (req, res)=>{
    const object = {name: "lars", age: 44}
    res.json({mesg: "Get all workouts", person: object})
})

router.get("/:id", (res, req) =>{
   res.json({msg:"A single workout"})
})

module.exports = router;