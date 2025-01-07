const express = require("express");
const router = express.Router();

const {
  getDetailsSuper,
  updateDetailsSuper,
  updatePandit,
} = require("../Controllers/SuperAdmin");
const { auth } = require("../middlewares/Auth");

router.get("/superadmin/details", auth, getDetailsSuper);
router.patch("/superadmin/details/update", auth, updateDetailsSuper);

//update pandit details
router.patch("/superadmin/update/pandit/:id", auth, updatePandit);

module.exports = router;
