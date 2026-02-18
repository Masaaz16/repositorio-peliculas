// Base de datos de películas
const peliculas = [
  {
    id: 1,
    titulo: "Mad Max: Furia en el Camino",
    categoria: "accion",
    año: 2015,
    puntuacion: 8.1,
    vistas: 15420,
    poster: "https://m.media-amazon.com/images/M/MV5BMTk2NTMwMzk0OV5BMl5BanBnXkFtZTcwMzc0MTg3Mw@@._V1_SX300.jpg",
    trailer: "https://www.youtube.com/embed/F7XknTjbzzI",
    sinopsis: "En un futuro devastado, Max Rockatansky es perseguido por el despiadado Inmortán Joe. Se ve obligado a conducir un enorme camión cisterna a través del desierto en una carrera contrarreloj. Mad Max debe colaborar con Furiosa, una guerrera leal al tirano, para escapar de las garras de Joe y encontrar la libertad.",
    generos: "Acción, Ciencia Ficción"
  },
  {
    id: 2,
    titulo: "La Vida es Bella",
    categoria: "drama",
    año: 1997,
    puntuacion: 8.6,
    vistas: 22150,
    poster: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjNDEtODc5Ni00ZDQwLWEwMDItNDA5ZThjNzlmMGQ1XkEyXkFqcGdeQXVyNTA4NzMyMzQ@._V1_SX300.jpg",
    trailer: "https://www.youtube.com/embed/K0nm1csKa5c",
    sinopsis: "Durante la Segunda Guerra Mundial, Guido, un padre judío de Arezzo (Italia), inventa un juego para proteger a su hijo Giosuè del horror del Holocausto. Con su ingenio y amor paternal, crea una realidad alternativa donde la tragedia se convierte en una aventura emocionante.",
    generos: "Drama, Comedia"
  },
  {
    id: 3,
    titulo: "Forrest Gump",
    categoria: "drama",
    año: 1994,
    puntuacion: 8.8,
    vistas: 34567,
    poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmM0OTZhNjkwODUzXkEyXkFqcGdeQXVyNjU0OTQ0ODA@._V1_SX300.jpg",
    trailer: "https://www.youtube.com/embed/bLvqoByHAAk",
    sinopsis: "Forrest Gump, un hombre con un cociente intelectual bajo pero un corazón de oro, nos cuenta la historia de su vida extraordinaria. Desde la infancia en Alabama hasta convertirse en héroe de guerra, empresario de éxito, y atleta olímpico, su vida accidental pero genuina nos inspira.",
    generos: "Drama, Comedia"
  },
  {
    id: 4,
    titulo: "La Zona de Confort",
    categoria: "comedia",
    año: 2012,
    puntuacion: 7.2,
    vistas: 12890,
    poster: "https://m.media-amazon.com/images/M/MV5BNGY1OTg2MTA5Nl5BMl5BanBnXkFtZTcwNjc4MTU1Nw@@._V1_SX300.jpg",
    trailer: "https://www.youtube.com/embed/N2z2-LzvROc",
    sinopsis: "Un editor de libros excéntrico se ve obligado a viajar por todo el mundo cuando su principal fuente de ingresos le abandona. Durante su viaje, descubrirá nuevas amistades, experiencias humanas y aprendera que la vida fuera de su zona de confort es mucho más emocionante.",
    generos: "Comedia, Aventura"
  },
  {
    id: 5,
    titulo: "Interstellar",
    categoria: "ciencia-ficcion",
    año: 2014,
    puntuacion: 8.6,
    vistas: 38920,
    poster: "https://m.media-amazon.com/images/M/MV5BZjdkODU3MDUtN2U4Zi00OWFhLThiMmUtZWFiZmQ2de1hNjg3XkEyXkFqcGdeQXVyNDQ5MDc5NjY@._V1_SX300.jpg",
    trailer: "https://www.youtube.com/embed/zSID6AWvubE",
    sinopsis: "En un futuro distópico donde la humanidad está al borde de la extinción, un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo planeta habitable. El piloto Cooper debe dejar atrás a su familia para salvar a la humanidad, en una misión que desafía el tiempo y el espacio.",
    generos: "Ciencia Ficción, Drama"
  },
  {
    id: 6,
    titulo: "Hereditary",
    categoria: "terror",
    año: 2018,
    puntuacion: 7.6,
    vistas: 9843,
    poster: "https://m.media-amazon.com/images/M/MV5BMTQ5OTE1MDEwN15BMl5BanBnXkFtZTcwNzAxNDkzNw@@._V1_SX300.jpg",
    trailer: "https://www.youtube.com/embed/V6wWKNAHY-8",
    sinopsis: "Después del fallecimiento de su abuela, una familia se ve aterrada por sucesos cada vez más perturbadores y aterradores. Lo que comenzó como una simple herencia se transforma en una pesadilla de proporciones cataclísmicas que pone en peligro la vida de toda la familia.",
    generos: "Terror, Drama"
  },
  {
    id: 7,
    titulo: "El Viaje de Chihiro",
    categoria: "aventura",
    año: 2001,
    puntuacion: 8.9,
    vistas: 45320,
    poster: "https://m.media-amazon.com/images/M/MV5BODc2NWE3MDEtMDA4ZC00YTQwLWJmMmYtOTg0ZWFmNzhlOGQ1XkEyXkFqcGdeQXVyMTMxODk2OTk@._V1_SX300.jpg",
    trailer: "https://www.youtube.com/embed/ByXuk9QAeE8",
    sinopsis: "Una niña llamada Chihiro entra accidentalmente en un mundo mágico poblado de dioses y espíritus. La única forma de regresar a casa es trabajar en una casa de baños mágica. Durante su viaje, aprenderá valiosas lecciones sobre el coraje, la amistad y la identidad.",
    generos: "Aventura, Fantasía"
  },
  {
    id: 8,
    titulo: "John Wick",
    categoria: "accion",
    año: 2014,
    puntuacion: 7.4,
    vistas: 28764,
    poster: "https://m.media-amazon.com/images/M/MV5BMmQ0MzA1YzMtODQ1OS00MzdkLTlmNGUtNzg3MTZhYTZmN2E2XkEyXkFqcGdeQXVyNjM1NDYyMDc@._V1_SX300.jpg",
    trailer: "https://www.youtube.com/embed/ggFqg2x4rco",
    sinopsis: "Un asesino jubilado es arrastrado de nuevo a su vida anterior cuando unos criminales rompen su casa y le roban su auto. Conocido en el submundo criminal como una leyenda, John Wick emprende un camino de venganza que dejará a sus enemigos temblando de miedo.",
    generos: "Acción, Thriller"
  },
  {
    id: 9,
    titulo: "Cantinflas",
    categoria: "comedia",
    año: 1911,
    puntuacion: 7.9,
    vistas: 5420,
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cantinflas_%281911%29.jpg/220px-Cantinflas_%281911%29.jpg",
    trailer: "https://www.youtube.com/embed/xJHEPp3GDJA",
    sinopsis: "La vida y carrera del legendario cómico mexicano Mario Cantinflas, quien revolucionó el cine con su humor absurdo y su peculiar forma de hablar. Una celebración de su genio cómico y su impacto duradero en la cultura cinematográfica mundial.",
    generos: "Comedia, Biografía"
  },
  {
    id: 10,
    titulo: "Gravity",
    categoria: "ciencia-ficcion",
    año: 2013,
    puntuacion: 7.7,
    vistas: 31200,
    poster: "https://m.media-amazon.com/images/M/MV5BMjA5NTAzMDA0OV5BMl5BanBnXkFtZTcwNDc4MDEzMw@@._V1_SX300.jpg",
    trailer: "https://www.youtube.com/embed/OiTiKOy1o0o",
    sinopsis: "Una ingeniera médica y un astronauta deben aprender a trabajar juntos cuando se quedan atrapados en el espacio después de un desastre en su nave. Flotando sin poder comunicarse con la Tierra, luchan por sobrevivir en el vacío infinito del espacio.",
    generos: "Ciencia Ficción, Thriller"
  },
  {
    id: 11,
    titulo: "El Señor de los Anillos",
    categoria: "aventura",
    año: 2001,
    puntuacion: 9.0,
    vistas: 52100,
    poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM1NzUtNWY0My00Y2I0LTg5Y2UtMzM1NWJjNGY3ZTcyXkEyXkFqcGdeQXVyNjkwMjQ1NzM@._V1_SX300.jpg",
    trailer: "https://www.youtube.com/embed/V75dmmwTw0c",
    sinopsis: "En un mundo de fantasía, un humilde hobbit debe llevar un anillo mágico a través de peligrosas tierras para destruirlo en los fuegos del Monte del Destino. Acompañado por amigos valientes, Frodo emprende una épica aventura que pondrá a prueba su coraje.",
    generos: "Aventura, Fantasía"
  },
  {
    id: 12,
    titulo: "The Ring",
    categoria: "terror",
    año: 2002,
    puntuacion: 7.1,
    vistas: 18956,
    poster: "https://m.media-amazon.com/images/M/MV5BNTM1NjA5NzEwMV5BMl5BanBnXkFtZTcwMDMyNDUzOA@@._V1_SX300.jpg",
    trailer: "https://www.youtube.com/embed/KZkZSb33Vak",
    sinopsis: "Una periodista investiga una película misteriosa que mata a todos los que la ven siete días después. Para salvar su vida y la de su hijo, debe descubrir el oscuro secreto detrás de la cinta maldita antes de que sea demasiado tarde.",
    generos: "Terror, Misterio"
  }
];

let peliculasActuales = peliculas;
let categoriaActual = "todas";
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// Elementos del DOM
const peliculasContainer = document.getElementById("peliculasContainer");
const buscador = document.getElementById("buscador");
const botonesCategorias = document.querySelectorAll(".btn-categoria");
const modal = document.getElementById("modal");
const cerrarModal = document.querySelector(".cerrar");
const sugerenciasContainer = document.getElementById("sugerencias");

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  mostrarPeliculas(peliculas);
  agregarEventos();
  actualizarContadorFavoritos();
});

// Agregar funcionalidades
function agregarEventos() {
  // Búsqueda
  buscador.addEventListener("input", buscarPeliculas);

  // Categorías
  botonesCategorias.forEach(boton => {
    boton.addEventListener("click", filtrarPorCategoria);
  });

  // Modal
  cerrarModal.addEventListener("click", cerrarModalPelicula);
  window.addEventListener("click", event => {
    if (event.target === modal) {
      cerrarModalPelicula();
    }
  });

  // Botón trailer
  const btnTrailer = document.getElementById("btnTrailer");
  btnTrailer.addEventListener("click", mostrarTrailer);

  // Cerrar sugerencias al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".busqueda-container")) {
      sugerenciasContainer.classList.remove("mostrar");
    }
  });
}

// Mostrar trailer
function mostrarTrailer() {
  const trailerContainer = document.getElementById("trailerContainer");
  trailerContainer.style.display = trailerContainer.style.display === "none" ? "block" : "none";
}

// Mostrar películas
function mostrarPeliculas(peliculasAMostrar) {
  peliculasContainer.innerHTML = "";

  if (peliculasAMostrar.length === 0) {
    peliculasContainer.innerHTML = '<div class="sin-resultados">No se encontraron películas</div>';
    return;
  }

  peliculasAMostrar.forEach(pelicula => {
    const card = document.createElement("div");
    card.className = "pelicula-card";
    const esFavorito = favoritos.includes(pelicula.id);
    
    card.innerHTML = `
      <div class="pelicula-poster-container">
        <img src="${pelicula.poster}" alt="${pelicula.titulo}" class="pelicula-poster">
        <button class="btn-favorito ${esFavorito ? 'favorito' : ''}" data-id="${pelicula.id}" title="Agregar a favoritos">
          <span class="corazon">${esFavorito ? '❤️' : '🤍'}</span>
        </button>
      </div>
      <div class="pelicula-info">
        <div class="pelicula-titulo">${pelicula.titulo}</div>
        <div class="pelicula-meta">
          <span>${pelicula.año}</span>
          <span class="pelicula-puntuacion">⭐ ${pelicula.puntuacion}</span>
        </div>
        <div class="pelicula-generos">${pelicula.generos}</div>
        <div class="pelicula-vistas">👁️ ${pelicula.vistas.toLocaleString('es-ES')} vistas</div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.closest(".btn-favorito")) {
        e.stopPropagation();
        return;
      }
      abrirModalPelicula(pelicula);
    });

    const btnFavorito = card.querySelector(".btn-favorito");
    btnFavorito.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorito(pelicula.id, btnFavorito);
    });

    agregarGestosSwipe(card, pelicula);
    peliculasContainer.appendChild(card);
  });
}

// Buscar películas
function buscarPeliculas() {
  const termino = buscador.value.toLowerCase();

  if (termino.length === 0) {
    sugerenciasContainer.classList.remove("mostrar");
    mostrarPeliculas(peliculasActuales);
    return;
  }

  const resultados = peliculasActuales.filter(pelicula =>
    pelicula.titulo.toLowerCase().includes(termino) ||
    pelicula.generos.toLowerCase().includes(termino) ||
    pelicula.sinopsis.toLowerCase().includes(termino)
  );

  mostrarSugerencias(resultados, termino);
  mostrarPeliculas(resultados);
}

// Mostrar sugerencias
function mostrarSugerencias(peliculas, termino) {
  sugerenciasContainer.innerHTML = "";

  if (peliculas.length === 0) {
    sugerenciasContainer.classList.remove("mostrar");
    return;
  }

  // Mostrar máximo 5 sugerencias
  const top5 = peliculas.slice(0, 5);

  top5.forEach(pelicula => {
    const item = document.createElement("div");
    item.className = "sugerencia-item";
    
    // Resaltar el término buscado
    const tituloResaltado = pelicula.titulo.replace(
      new RegExp(termino, 'gi'),
      match => `<strong>${match}</strong>`
    );

    item.innerHTML = `
      <img src="${pelicula.poster}" alt="${pelicula.titulo}" class="sugerencia-poster">
      <div class="sugerencia-info">
        <div class="sugerencia-titulo">${tituloResaltado}</div>
        <div class="sugerencia-genero">${pelicula.generos}</div>
      </div>
    `;

    item.addEventListener("click", () => {
      buscador.value = pelicula.titulo;
      sugerenciasContainer.classList.remove("mostrar");
      abrirModalPelicula(pelicula);
    });

    sugerenciasContainer.appendChild(item);
  });

  sugerenciasContainer.classList.add("mostrar");
}

// Filtrar por categoría
function filtrarPorCategoria(event) {
  // Remover clase activa de todos los botones
  botonesCategorias.forEach(boton => boton.classList.remove("activo"));

  // Agregar clase activa al botón clickeado
  event.target.classList.add("activo");

  const categoria = event.target.dataset.categoria;
  categoriaActual = categoria;

  // Filtrar películas
  if (categoria === "todas") {
    peliculasActuales = peliculas;
  } else if (categoria === "mas-vistas") {
    peliculasActuales = [...peliculas].sort((a, b) => b.vistas - a.vistas);
  } else if (categoria === "favoritos") {
    peliculasActuales = peliculas.filter(p => favoritos.includes(p.id));
  } else {
    peliculasActuales = peliculas.filter(p => p.categoria === categoria);
  }

  // Limpiar búsqueda
  buscador.value = "";

  mostrarPeliculas(peliculasActuales);
}

// Abrir modal con sinopsis
function abrirModalPelicula(pelicula) {
  document.getElementById("modalTitulo").textContent = pelicula.titulo;
  document.getElementById("modalAño").textContent = pelicula.año;
  document.getElementById("modalGenero").textContent = pelicula.generos;
  document.getElementById("modalPuntuacion").textContent = `${pelicula.puntuacion}/10`;
  document.getElementById("modalPoster").src = pelicula.poster;
  document.getElementById("modalSinopsis").textContent = pelicula.sinopsis;
  
  // Configurar trailer
  const trailerIframe = document.getElementById("trailerIframe");
  const trailerContainer = document.getElementById("trailerContainer");
  const btnTrailer = document.getElementById("btnTrailer");
  
  if (pelicula.trailer) {
    trailerIframe.src = pelicula.trailer;
    btnTrailer.style.display = "block";
  } else {
    btnTrailer.style.display = "none";
  }
  
  // Agregar efecto blur al fondo
  peliculasContainer.style.filter = "blur(5px)";
  peliculasContainer.style.pointerEvents = "none";

  modal.style.display = "block";
}

// Cerrar modal
function cerrarModalPelicula() {
  modal.style.display = "none";
  peliculasContainer.style.filter = "none";
  peliculasContainer.style.pointerEvents = "auto";
  
  // Limpiar trailer
  document.getElementById("trailerIframe").src = "";
  document.getElementById("trailerContainer").style.display = "none";
}

// Alternar favorito
function toggleFavorito(peliculaId, btnElement) {
  const index = favoritos.indexOf(peliculaId);
  
  if (index > -1) {
    // Remover de favoritos
    favoritos.splice(index, 1);
    btnElement.classList.remove("favorito");
    btnElement.querySelector(".corazon").textContent = "🤍";
  } else {
    // Agregar a favoritos
    favoritos.push(peliculaId);
    btnElement.classList.add("favorito");
    btnElement.querySelector(".corazon").textContent = "❤️";
  }
  
  // Guardar en localStorage
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  
  // Actualizar contador
  actualizarContadorFavoritos();
}

// Actualizar contador de favoritos
function actualizarContadorFavoritos() {
  document.getElementById("contadorFavoritos").textContent = favoritos.length;
}

// Función para agregar gestos de swipe
function agregarGestosSwipe(card, pelicula) {
  let tocInicial = 0;
  let xDown = null;
  let yDown = null;

  card.addEventListener("touchstart", e => {
    xDown = e.touches[0].clientX;
    yDown = e.touches[0].clientY;
    tocInicial = Date.now();
  }, false);

  card.addEventListener("touchend", e => {
    if (!xDown || !yDown) return;

    const xUp = e.changedTouches[0].clientX;
    const yUp = e.changedTouches[0].clientY;
    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;
    const tiempoToque = Date.now() - tocInicial;

    // Verificar que es un swipe (no un scroll vertical)
    if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > 50 && tiempoToque < 300) {
      if (xDiff > 0) {
        // Swipe a la izquierda
        animarDesviacion(card, "izquierda", pelicula);
      } else {
        // Swipe a la derecha
        animarDesviacion(card, "derecha", pelicula);
      }
    }

    xDown = null;
    yDown = null;
  }, false);

  // También soportar mouse drag para desktop
  card.addEventListener("mousedown", e => {
    xDown = e.clientX;
    yDown = e.clientY;
    tocInicial = Date.now();
  });

  card.addEventListener("mouseup", e => {
    if (!xDown || !yDown) return;

    const xUp = e.clientX;
    const yUp = e.clientY;
    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;
    const tiempoToque = Date.now() - tocInicial;

    // Verificar que es un drag rápido (no un click)
    if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > 50 && tiempoToque < 500) {
      if (xDiff > 0) {
        animarDesviacion(card, "izquierda", pelicula);
      } else {
        animarDesviacion(card, "derecha", pelicula);
      }
    }

    xDown = null;
    yDown = null;
  });
}

// Función para animar y hacer pop a la tarjeta
function animarDesviacion(card, direccion, pelicula) {
  card.style.pointerEvents = "none"; // Evitar múltiples clicks

  if (direccion === "izquierda") {
    card.classList.add("swipe-izquierda");
  } else {
    card.classList.add("swipe-derecha");
  }

  // Esperar a que termine la animación y remover la tarjeta
  setTimeout(() => {
    card.classList.add("pop-out");
    setTimeout(() => {
      card.style.opacity = "0";
      card.style.pointerEvents = "auto";
      setTimeout(() => {
        card.remove();
      }, 300);
    }, 400);
  }, 500);
}
