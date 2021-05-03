const express = require('express');
const router = express.Router();
const sites = require('../controllers/sites');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validatesite } = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const site = require('../models/site');

router.route('/')
    .get(catchAsync(sites.index))
    .post(isLoggedIn, upload.array('image'), validatesite, catchAsync(sites.createsite))


router.get('/new', isLoggedIn, sites.renderNewForm)

router.route('/:id')
    .get(catchAsync(sites.showsite))
    .put(isLoggedIn, isAuthor, upload.array('image'), validatesite, catchAsync(sites.updatesite))
    .delete(isLoggedIn, isAuthor, catchAsync(sites.deletesite));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(sites.renderEditForm))



module.exports = router;