let nombreUsuario = prompt("Ingrese su Nombre")
let apellidoUsiario = prompt("Ingrese su Apellido")
let usuario = (nombreUsuario + " " + apellidoUsiario)
let nivelUsuario;
do {
    nivelUsuario = prompt("Ingrese el número que corresponda a su nivel de Jiujitsu: \n1. Cinturón Blanco \n2. Cinturón Azul \n3. Cinturón Morado \n4. Cinturón Café \n5. Cinturón Negro")
    if ((isNaN(nivelUsuario)) || (nivelUsuario > 5)){
        alert("Ingrese el número de su opción (del 1 al 5).");
    }
} while ((isNaN(nivelUsuario)) || (nivelUsuario > 5));

function obtenerRecomendacion (nivelParam) {
    switch (nivelParam) {
        case "1":
            return "Para tu nivel, recomendamos que te inscribas en los cursos de fundamentos y los repases hasta que los domines a la perfección";
        case "2":
            return "Para tu nivel, te recomendamos elegir los cursos intermedios y avanzados de la o las técnicas que más te gusten para comenzar para comenzar a buscar y desarrollar tu juego propio. \nTambién te recomendamos inscribirte en los cursos de preparación física para mejorar tu resistencia muscular.";
        case "3":
            return "Para tu nivel, te recomendamos revisar a profundidad los cursos avanzados de las técnicas que ya dominas hasta controlar todos sus detalles, transiciones, contras y amenazas múltiples.";
        case "4":
            return "Para tu nivel, te recomendamos revisar los cursos de leg locks."
        case "5":
            return "Bienvenido Mestre, puedes eligir el curso que más prefieras según lo que quieras reforzar.";
    }
}

let recomendacion = obtenerRecomendacion(nivelUsuario);

alert(usuario + ": " + recomendacion);