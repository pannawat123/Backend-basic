const router = require('express').Router() // ขั้นตอนที่ 1

router.get('/' , (req, res) => { //localhost:3000/api/products
    res.send('this is product')
})

router.get('/one' , (req, res) => { //localhost:3000/api/products/one
    res.send('this is product one')
})


module.exports = router // ขั้นตอนที่ 2