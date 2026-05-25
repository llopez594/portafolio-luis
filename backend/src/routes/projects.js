const { Router } = require('express');
const { getAll, getFeatured, getOne } = require('../controllers/projectsController');

const router = Router();

router.get('/',          getAll);
router.get('/featured',  getFeatured);
router.get('/:id',       getOne);

module.exports = router;
