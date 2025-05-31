
const express = require('express');
const router = express.Router();

// Logout route
router.post('/logout', (req, res) => {
    // Clear session or token
    req.session = null; // If using sessions
    res.clearCookie('token'); // If using cookies
    res.status(200).json({ message: 'User logged out successfully' });
});

module.exports = router;