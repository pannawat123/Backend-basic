const router = require('express').Router()
const res = require('express/lib/response')
const userRouter = require('./user')
const productRouter = require('./product')


router.use('/users', userRouter) // localhost:3000/api/users
router.use('/products', productRouter)  // localhost:3000/api/product

// router.get('/', (req , res) => {
//     res.send("this is a router")
// })



module.exports = router