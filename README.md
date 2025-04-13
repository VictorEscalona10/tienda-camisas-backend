# Tienda de Camisas - Backend

Este es el backend para una tienda de camisas, desarrollado con Node.js, Express y Prisma.

## 🚀 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn
- PostgreSQL (o la base de datos que prefieras configurar)
- Git

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd tienda_camisas_back
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto
   - Copia el contenido del archivo `.env.example` (si existe) o configura las siguientes variables:
```env
DATABASE_URL="mysql://usuario:contraseña@localhost:3306/nombre_base_datos"
PORT=3000
JWT_SECRET="tu_secreto_jwt"
```

4. Inicializa la base de datos:
```bash
npx prisma generate
npx prisma db push
```

## 🛠️ Desarrollo

Para iniciar el servidor en modo desarrollo:
```bash
npm run dev
```

El servidor se ejecutará en `http://localhost:3000`

## 📚 Estructura del Proyecto

```
src/
├── config/         # Configuraciones de la aplicación
├── controllers/    # Controladores de la lógica de negocio
├── docs/           # Documentación de la API con Swagger
├── routes/         # Rutas de la API
├── generated/     # Archivos generados por Prisma
└── index.js       # Punto de entrada de la aplicación
```

## ✨ Tecnologías Utilizadas

- Node.js
- Express
- Prisma
- PostgreSQL o MySQL
- JWT
- dotenv 
