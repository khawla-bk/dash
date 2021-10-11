const express = require("express");
const {
  serviceList,
  addService,
  getService,
  deleteService,
  updateService,
} = require("../controllers/Service");
const { isAuth } = require("../middlewares/isAuth");
const router = express.Router();

router.get("/", isAuth, serviceList);
router.get("/:ID", isAuth, getService);
router.post("/", isAuth, addService);
router.delete("/:ID", deleteService);
router.put("/:ID", updateService);

module.exports = router;
