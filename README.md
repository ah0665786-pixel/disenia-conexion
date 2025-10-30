# Proyecto Diseñia - Servicios de Diseño Digital con IA

## 1. Requisitos
- Node.js v22.21.0 o superior
- MySQL 8.0
- MySQL Workbench (opcional)

## 2. Instalación de dependencias
En la raíz del proyecto, ejecutar:
```bash
npm install

# Instrucciones de instalación y configuración - Proyecto Diseñia

## 1️⃣ Crear la base de datos

1. Abrir MySQL o MySQL Shell con un usuario con permisos suficientes (por ejemplo `root`).

2. Ejecutar el script de base de datos que se encuentra en la carpeta `db`:

```sql
-- Crear la base de datos (si no existe)
CREATE DATABASE IF NOT EXISTS disenia_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Crear usuario específico para la app
CREATE USER 'disenia_user'@'localhost' IDENTIFIED BY 'disenia123';

-- Otorgar permisos al usuario sobre la base de datos
GRANT ALL PRIVILEGES ON disenia_db.* TO 'disenia_user'@'localhost';
FLUSH PRIVILEGES;

-- Seleccionar la base de datos
USE disenia_db;

-- Ejecutar las tablas y datos iniciales
SOURCE db/disenia_db.sql;

Instalar los módulos de Node.js

Abrir la terminal en la carpeta raíz del proyecto (C:\disenia-conexion).

Ejecutar:

npm install

Ejecutar la aplicación
node app.js


El servidor correrá en http://localhost:3000.

Puedes probar que funciona abriendo esa URL en un navegador; deberías ver un mensaje de prueba de la ruta principal.

Nota

Asegúrate de que la carpeta db contiene tanto el script SQL (disenia_db.sql) como el diagrama (disenia_db.mwb).

La carpeta src debe incluir middleware, routes, controllers y models para que la aplicación funcione correctamente.