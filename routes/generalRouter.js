const {Router} = require('express')
const generalControllers = require('../controllers/generalControllers')
const router =Router()


router.get('/',generalControllers.create_join)
router.get('/join',generalControllers.join)

module.exports = router