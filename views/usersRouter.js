
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');
const usersControllers = require('../controllers/usersControllers');

//Endpoints

router.get("/", auth, usersControllers.getAllUsers);
router.post("/", usersControllers.newUser);
router.put("/update", auth, usersControllers.updateUser);
router.delete("/delete", auth, usersControllers.deleteUser);
router.post("/login", usersControllers.loginUser);
router.post("/byName", auth, usersControllers.getUsersByName);
//router.post("/admin", isAdmin, usersController.getAllUsers);

module.exports = router;