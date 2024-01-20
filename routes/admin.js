const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin_controller")


router.post('/login',adminController.signIn);
router.post('/signUp',adminController.signUp)
router.post('/addCandidateOrInterviewer',adminController.addCandidateOrInterviewer)


module.exports = router;