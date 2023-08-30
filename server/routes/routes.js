const express = require('express')

const router = express.Router()

const { getAllData, getCardCharts } = require('../controllers/controllers')

router.route('/').get(getAllData)
router.route('/:id').get(getCardCharts)

module.exports = router