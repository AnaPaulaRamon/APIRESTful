const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log("Servidor escuchando en: ", PORT)
});


const productosRouter = require('./routes/productos');
app.use('/api/productos', productosRouter);


app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(cors());



