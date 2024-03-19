const cursos = [
  {
    nombre: "Principiantes",
    nivel: "Básico",
    horario: "Lunes a Viernes 18:00 - 19:30"
  },
  {
    nombre: "Intermedios",
    nivel: "Intermedio",
    horario: "Lunes a Viernes 13:00 - 14:30"
  },
  {
    nombre: "Avanzados",
    nivel: "Avanzado",
    horario: "Lunes a Viernes 20:00 - 21:30"
  },
];

function organizarCursosPorNivel(cursos) {
  const cursosPorNivel = {};
  cursos.forEach(curso => {
    if (!cursosPorNivel[curso.nivel]) {
      cursosPorNivel[curso.nivel] = [];
    }
    cursosPorNivel[curso.nivel].push(curso);
  });
  return cursosPorNivel;
}

const cursosPorNivel = organizarCursosPorNivel(cursos);

function obtenerCursosPorNivel(nivel) {
  return cursosPorNivel[nivel] || [];
}

const nivelUsuario = prompt("¿Cuál es tu nivel de jiu-jitsu?");
const cursosDisponibles = obtenerCursosPorNivel(nivelUsuario);
if (cursosDisponibles.length > 0) {
  console.log("Los cursos disponibles para el nivel " + [nivelUsuario] + " son:");
  cursosDisponibles.forEach(curso => {
    console.log([curso.nombre] + " " + [curso.horario]);
  });
} else {
  console.log("Lo siento, no hay cursos disponibles para el nivel " + [nivelUsuario]);
}