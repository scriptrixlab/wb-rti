const express = require("express");
const {
  create,
  list,
  fetchcaseno,
  updatecaseno,
} = require("../../controller/caseno/caseno.controller");
const {
  isAuth,
  isAdmin,
  requireSignin,
} = require("../../controller/user/auth.controller");
const { isAuthenticated } = require("../../middleware");
const router = express.Router();

router.post("/create/caseno", isAuthenticated, create);
router.get("/caseno/list",list)
router.get("/caseno/fetch",fetchcaseno)
router.put("/caseno/update",updatecaseno)

module.exports = router;
