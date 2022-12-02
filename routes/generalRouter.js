const {Router} = require('express')
const generalControllers = require('../controllers/generalControllers')
const router =Router()


router.get('/',generalControllers.home)
router.get('/join',generalControllers.create_join)
router.get('/arena',generalControllers.arena)



module.exports = router