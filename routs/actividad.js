/*
    Rutas de actividad
    host + /api/actividad
*/

const {Router} = require('express');

const router = Router();

const {  count, getActividades, getActividad, crearActividad, eliminarActividad } = require ('../controllers/actividad');

router.get('/count', count)
router.get('/', getActividades);
router.get('/:id', getActividad);

router.post('/', crearActividad );

router.delete('/:id', eliminarActividad);



module.exports = router;