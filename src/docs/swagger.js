import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Tienda de Camisas',
            version: '1.0.0',
            description: 'Documentación de la API para la tienda de camisas',
            contact: {
                name: 'Tu Nombre',
                email: 'tu@email.com'
            }
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor de desarrollo'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: ['./src/routes/*.js'] // Ruta donde buscará los comentarios de documentación
};

export const specs = swaggerJsdoc(options); 