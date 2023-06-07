const {Router}=require('express');
const personajesController=require('../controllers/personajes.controller');

const router=Router();
router.get('/',personajesController.obtenerPersonajes); 
router.get('/:num',personajesController.obtenerPersonaje);
router.post('/insert',personajesController.insertarPersonaje);
router.put('/actualizar/:num',personajesController.actualizarPersonaje);
router.delete('/borrar/:num',personajesController.eliminarPersonaje);
module.exports=router; 