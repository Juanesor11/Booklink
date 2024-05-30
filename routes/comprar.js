const express = require('express')
const router = express.Router()

// A todos los articulos en venta
router.get('/', (req, res) => {
    res.render('comprar/index')
});

module.exports = router
