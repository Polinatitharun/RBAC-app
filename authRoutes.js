const express = require('express');
const { registerUser, loginUser, adminData } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/admin', protect(['Admin']), adminData);

module.exports = router;
