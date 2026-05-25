const { Router } = require('express');
const { create } = require('../controllers/messagesController');

const router = Router();

router.post('/', create);

module.exports = router;
