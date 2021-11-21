const express = require('express');
const router = express.Router();
const cors = require('cors');
const Contenedor = require('../classes/Contenedor');
const productos = new Contenedor('./files/productos.txt');

router.use(express.json()); 
router.use(express.urlencoded({extended: true}));
router.use(cors());


//GETS
router.get('/', (req,res) => {+
    productos.getAll().then(result => {
        res.send(result.data);
    })
})

router.get('/:id', (req, res) => {
    let pId = req.params.id; 
    pId = parseInt(id);
    productos.getById(pId).then(result => {
        res.send(result);
    })
})

//POSTS
router.post('/', (req,res) => {
    let cuerpo = req.body;
    productos.save(cuerpo).then(result => {
        res.send(result);
    })
})

//PUTS
router.put('/:id', (req,res) => {
    let pId = parseInt(req.params.id);
    let body = req.body;
    productos.updateProduct(pId,body).then(result => {
        res.send(result);
    })
})

// DELETES
router.delete('/:id', (req,res) => {
    let pId = parseInt(req.params.id);
    productos.deleteById(pId).then(result => {
        res.send(result);
    })
})

module.exports = router;