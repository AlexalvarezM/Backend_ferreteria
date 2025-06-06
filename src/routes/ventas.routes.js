import { Router } from 'express';
import { obtenerVentasConDetalles, obtenerVentas, registrarVenta, eliminarVenta, actualizarVenta, obtenerVentaPorId } from '../controllers/ventas.controller.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/ventas', obtenerVentasConDetalles);
router.get('/obtenerventas', obtenerVentas);

// Ruta para registrar una nueva venta
router.post('/registrarventa', registrarVenta);

// Ruta para eliminar una venta
router.delete('/eliminarventa/:id_venta', eliminarVenta);

// Ruta para actualizar una venta
router.patch('/actualizarventa/:id_venta', actualizarVenta);

// Ruta para obtener venta por id
router.get('/obtenerVentaPorId/:id_venta', obtenerVentaPorId);


export default router;