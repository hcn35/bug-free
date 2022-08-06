const express = require("express");

const router = express.Router();
const userController = require("../controllers/user");
const authController = require("../controllers/auth");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgetPassword", authController.forgetPassword);
router.patch("/resetPassword/:token", authController.resetPassword);
router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updatePassword
);
router.patch("/updateMe", authController.protect, userController.updateMe);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
