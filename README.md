# Portafolio Personal — Luis López

Portafolio web personal con backend conectado a base de datos MySQL.  
Desarrollado con HTML, CSS, JavaScript, Node.js, Express y Sequelize.

---

## Estructura del proyecto

```
portafolio-luis/
├── frontend/
│   ├── index.html        # Página principal
│   ├── css/
│   │   └── style.css     # Estilos y diseño responsivo
│   ├── js/
│   │   └── main.js       # Interacciones, animaciones y consumo de API
│   └── img/
│       └── foto.png      # Foto de perfil
├── backend/
│   ├── src/
│   │   ├── server.js         # Punto de entrada Express
│   │   ├── config/           # Configuración Sequelize
│   │   ├── database/         # Conexión y script de verificación
│   │   ├── models/           # Project.js, Message.js
│   │   ├── migrations/       # Historial de cambios en BD
│   │   ├── seeders/          # Datos iniciales
│   │   ├── routes/           # projects.js, messages.js
│   │   ├── controllers/      # Lógica de cada ruta
│   │   └── middlewares/      # Manejo de errores
│   ├── .env.example          # Variables de entorno requeridas
│   ├── .sequelizerc          # Rutas para sequelize-cli
│   └── package.json
├── database/
│   ├── schema.sql            # Script SQL de creación de tablas
│   └── diagrama-er.png       # Diagrama Entidad-Relación
└── README.md
```

---

## Tecnologías utilizadas

**Frontend**
- HTML5 semántico
- CSS3 (Grid, Flexbox, variables CSS, media queries)
- JavaScript vanilla (Fetch API, IntersectionObserver)

**Backend**
- Node.js + Express
- Sequelize ORM + sequelize-cli
- MySQL

---

## Endpoints de la API

| Método | Endpoint               | Descripción                    |
| ------ | ---------------------- | ------------------------------ |
| GET    | /api/projects          | Listar todos los proyectos     |
| GET    | /api/projects/featured | Listar proyectos destacados    |
| GET    | /api/projects/:id      | Obtener un proyecto por ID     |
| POST   | /api/messages          | Guardar mensaje del formulario |

---

## Instalación y uso

### Requisitos previos
- Node.js 18+
- MySQL corriendo localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/llopez594/portafolio-luis.git
cd portafolio-luis
```

### 2. Configurar el backend

```bash
cd backend
cp .env.example .env
# Editar .env con tus credenciales de MySQL
npm install
```

### 3. Preparar la base de datos

```bash
npm run db:check       # Verificar conexión
npm run db:migrate     # Crear tablas
npm run db:seed        # Insertar datos de ejemplo
```

### 4. Iniciar el servidor

```bash
npm run dev            # Modo desarrollo (nodemon)
npm start              # Modo producción
```

### 5. Ver el frontend

Abre `frontend/index.html` en el navegador.  
Asegúrate de que el backend esté corriendo en `http://localhost:3000`.

---

## Scripts disponibles (backend)

| Script                    | Descripción                     |
| ------------------------- | ------------------------------- |
| `npm run dev`             | Servidor con recarga automática |
| `npm start`               | Servidor en producción          |
| `npm run db:check`        | Verificar conexión a MySQL      |
| `npm run db:migrate`      | Ejecutar migraciones            |
| `npm run db:migrate:undo` | Revertir última migración       |
| `npm run db:seed`         | Insertar datos iniciales        |
| `npm run db:seed:undo`    | Eliminar datos insertados       |

---

## Despliegue

- **Frontend:** GitHub Pages — [Ver sitio en vivo](https://llopez594.github.io/portafolio-luis)
- **Backend:** Render o Railway (configurar variables de entorno del `.env`)

---

## Variables de entorno requeridas

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=portafolio_db
DB_USER=root
DB_PASSWORD=tu_password
```