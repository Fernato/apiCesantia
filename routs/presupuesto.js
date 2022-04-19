/*
    Rutas de presupuesto
    host + /api/presupuesto
*/

const {Router} = require('express');

const router = Router();

const {  calculoPresupuesto, crearPresupuesto, getPresupuestos, actualizarPresupuesto, getPresupuesto, deletePresupuesto } = require ('../controllers/presupuesto');


router.get('/:monto', calculoPresupuesto);
router.post('/',crearPresupuesto);
router.get('/', getPresupuestos);
router.put('/:idPresupuesto', actualizarPresupuesto);
router.get('/getpresupuesto/:id', getPresupuesto);
router.delete('/:idEliminar', deletePresupuesto)








module.exports = router;