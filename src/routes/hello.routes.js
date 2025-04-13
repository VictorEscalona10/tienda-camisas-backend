import { Router } from "express";
import helloController from "../controllers/hello.controller.js";

const router = Router()

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retorna un mensaje de saludo
 *     description: Endpoint de prueba que retorna un mensaje de saludo
 *     tags: [Hello]
 *     responses:
 *       200:
 *         description: Mensaje de saludo exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hola Mundo
 */
router.get('/', helloController)

export default router 
