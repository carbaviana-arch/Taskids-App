# Shukudai: Misión Recompensa - v4.1 (Estilo Fortnite 🎮) ⭐️

**Shukudai** (宿題, "deberes" en japonés) es un sistema gamificado simple, implementado en un único archivo HTML/JavaScript, diseñado para ayudar a gestionar y motivar la realización de tareas y la buena conducta a través de puntos y recompensas.

## 🚀 Novedades de la Versión TASK 4.1: Estilo Fortnite & Mobile-First

Esta versión incorpora un rediseño completo de la interfaz de usuario con un estilo **Fortnite-Inspired** (colores vibrantes, botones grandes, tipografía dinámica) y está optimizada para ser **Mobile-First**, asegurando una experiencia fluida en teléfonos y tabletas.

La característica principal de la versión base (`v4.1`) es la implementación completa del **CRUD (Crear, Leer, Actualizar, Eliminar)** de las Tareas Diarias y sus categorías, **junto con la implementación CRUD completa del Horario Escolar**. Esto permite una personalización total del sistema: puedes añadir o modificar cualquier tarea y gestionar tu horario sin editar el código fuente.

---

## ✨ Características Principales

### 1. Sistema de Gamificación (Puntos, Minutos y Nivel)
* **Puntos (Pts):** Se obtienen por completar tareas con éxito. Se usan para comprar premios "físicos" o experiencias.
* **Minutos (Min):** Se obtienen por completar tareas con éxito. Funcionan como tiempo de pantalla canjeable (tablet, consola, etc.).
* **Nivel:** Se calcula automáticamente (cada 125 puntos = +1 Nivel) con un efecto de confeti visual de celebración.
* **Recompensas Diarias/Semanales:** Botones rápidos para sumar puntos bonus recurrentes.

### 2. Tareas (Home) - ¡GESTIÓN TOTAL!
* Panel de gestión diaria.
* **Botón ⚙️ Administrar:** Activa el "Modo Gestión" para las Tareas y Categorías.
* **Personalización Completa:** Añadir, editar o eliminar tareas y categorías.

### 3. Tienda (Shop)
* Listado de premios canjeables por **Puntos** o **Minutos**.
* Regla de restricción de **Minutos** fuera del fin de semana (la lógica se mantiene).

### 4. Agenda y Eventos (CRUD)
* Vista para registrar fechas importantes: **Exámenes, Tareas, Proyectos, Citas** o actividades extraescolares.
* **Creación, Edición y Eliminación** de eventos persistentes.

### 5. Horario Escolar (Gestión CRUD Total - v4.1)
* **Botón ⚙️ Administrar:** Activa el "Modo Gestión" y muestra el formulario CRUD.
* **Crear, Editar y Eliminar** clases o actividades extraescolares a cualquier día de la semana.
* **Persistencia:** Todos los cambios realizados en el horario se guardan automáticamente.

---

## 🛠️ Instalación y Uso

**Shukudai** está diseñado para ser extremadamente fácil de usar y no requiere ningún servidor ni herramientas de construcción.

1.  **Guardar el Código:** Guarda el código HTML, CSS y JavaScript proporcionado en los archivos `index.html`, `style.css` y `app.js`.
2.  **Abrir en Navegador:** Abre el archivo `index.html` con cualquier navegador web moderno (Chrome, Safari, Firefox).
3.  **Persistencia:** Todos los datos (puntos, tareas, agenda y el horario personalizado) se guardan automáticamente en la memoria local de tu navegador (`localStorage`).

**⚠️ Advertencia:** Para evitar la pérdida de datos, utiliza siempre el mismo navegador y dispositivo. Si borras el caché/datos del sitio, los datos se perderán (a menos que uses el botón de **Reiniciar** intencionadamente).

---

## 💡 Créditos

* **Supervisor y Administrador:** Francisco Carballo.
* **Concepto y Desarrollo:** Asistente de IA (Modelo Gemini).
* **Tecnologías:** HTML, Tailwind CSS (CDN), JavaScript (ES6), y `localStorage` para persistencia de datos.
* **Iconografía:** Font Awesome 6 Free.
* **Tipografía:** Luckiest Guy (Google Fonts).
* **Efectos de Sonido:** Google Actions.

***
creada con amor para Xebas, para que sigas creciendo todos los días
