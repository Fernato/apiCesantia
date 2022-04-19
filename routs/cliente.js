/*
    Rutas de cliente 
    host + /api/cliente
*/

const {Router} = require('express');

const router = Router();

const { getClientes,getCliente,crearCliente, eliminarCliente } = require ('../controllers/cliente');

router.get('/', getClientes);
router.get('/:cedula', getCliente);

router.post('/', crearCliente );

router.delete('/:id', eliminarCliente);



module.exports = router;