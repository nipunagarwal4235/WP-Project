const express = require("express");
const router = express.Router();
const Pamper = require("../notworking2/pamperpaws");

//getting a record from the database
router.get("/ninjas", function (req, res) {
  res.send({
    type: "GET",
  });
});

//adding a new record to the database
router.post("/ninjas", function (req, res) {
  Pamper.create(req.body).then(function (pamper) {
    res.send(pamper);
  });
});

//update a record in the database
router.put("/ninjas/:id", function (req, res) {
  res.send({
    type: "PUT",
  });
});

//deleting a record from the database
router.delete("/ninjas/:id", function (req, res) {
  res.send({
    type: "DELETE",
  });
});

module.exports = router;
