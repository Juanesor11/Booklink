const express = require('express')
const router = express.Router()

//Nuevo item a la venta
router.get('/sell', (req, res) => {
    res.render('Vender/index')
});

// Subir un item
router.post('/', (req, res) => {
    res.send('Create')
})

module.exports = router