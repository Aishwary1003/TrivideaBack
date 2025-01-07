const express = require("express");
const router = express.Router();

const { getDetailsAdmin, updateDetailsAdmin } = require("../Controllers/Admin");
const { auth } = require("../middlewares/Auth");

router.get("/admin/details", auth, getDetailsAdmin);
router.patch("/admin/details/update", auth, updateDetailsAdmin);
module.exports = router;
