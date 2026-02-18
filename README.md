# 🎬 Repositorio de Películas

Una aplicación web interactiva para explorar películas con búsqueda, filtrado por categorías y visualización de sinopsis.

## ✨ Características

- 🔍 **Buscador** - Busca películas por título, género o sinopsis
- 📂 **Categorías** - Filtra por Acción, Drama, Comedia, Ciencia Ficción, Terror y Aventura
- 📱 **Swipe/Deslizar** - Desliza películas hacia los lados para hacer pop (solo en dispositivos táctiles o con mouse)
- 👆 **Modal de Sinopsis** - Haz clic en cualquier película para ver su sinopsis completa
- ⭐ **Calificaciones** - Cada película muestra su puntuación IMDb
- 📱 **Diseño Responsivo** - Funciona perfectamente en móviles, tablets y desktop

## 🎮 Cómo Usar

1. **Buscar**: Escribe en la barra de búsqueda para encontrar películas
2. **Filtrar**: Haz clic en los botones de categorías para ver solo películas de ese género
3. **Ver Sinopsis**: Haz clic en cualquier película para abrir el modal con más información
4. **Deslizar**: En dispositivos táctiles o con mouse, desliza una película hacia los lados para hacerla desaparecer con una animación de "pop"

## 🎨 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con animaciones y gradientes
- **JavaScript Vanilla** - Lógica interactiva sin dependencias externas

## 📋 Estructura del Proyecto

```
├── index.html           # Página principal
├── styles.css           # Estilos y animaciones
├── script.js            # Lógica de la aplicación
├── README.md            # Este archivo
└── package.json         # Metadatos del proyecto
```

## 🚀 Instalación y Uso Local

### Opción 1: Abrir directamente
Solo abre el archivo `index.html` en tu navegador.

### Opción 2: Usar un servidor local

**Con Python 3:**
```bash
python -m http.server 8000
```

**Con Node.js (http-server):**
```bash
npx http-server
```

Luego abre `http://localhost:8000` en tu navegador.

## 🌐 Subir a GitHub

### Pasos para crear un repositorio en GitHub:

1. **Crea una cuenta en [GitHub.com](https://github.com)** (si no tienes)

2. **Crea un nuevo repositorio:**
   - Ve a https://github.com/new
   - Nombre: `repositorio-peliculas` (o el que prefieras)
   - Descripción: "Una aplicación web interactiva para explorar películas"
   - Selecciona público (público) para que otros lo vean
   - NO marques "Add a README file" (ya tenemos uno)
   - Haz clic en "Create repository"

3. **Desde tu terminal (en la carpeta del proyecto):**

```bash
# Inicializar git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Inicial: Repositorio de películas con swipe y búsqueda"

# Agregar el repositorio remoto (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/repositorio-peliculas.git

# Cambiar rama a main
git branch -M main

# Subir los cambios
git push -u origin main
```

4. **¡Listo!** Tu repositorio está en línea en `https://github.com/TU_USUARIO/repositorio-peliculas`

### Para futuros cambios:
```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

## 📦 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de dependencias

## 🎬 Base de Datos

El proyecto incluye 12 películas de ejemplo en diferentes categorías. Puedes modificar fácilmente el array `peliculas` en `script.js` para agregar más películas.

## 📄 Licencia

Este proyecto es de código abierto. Úsalo libremente para aprender y mejorar.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de hacer un fork y enviar pull requests con mejoras.

---

**Desarrollado con ❤️ | Películas | JavaScript**
