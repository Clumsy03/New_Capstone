// file: src/routes/index.js 
 
const express = require('express');
const router = express.Router();
const firebaseAuthController = require('../controllers/firebase-auth-controller');
const verifyToken = require('../middleware');

router.post('/api/register', firebaseAuthController.registerUser);
router.post('/api/login', firebaseAuthController.loginUser);
router.post('/api/logout', firebaseAuthController.logoutUser);
router.post('/api/reset-password', firebaseAuthController.resetPassword);
router.get('/api/history', verifyToken, firebaseAuthController.getClassificationHistory);

module.exports = router;