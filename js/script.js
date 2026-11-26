/*constantes*/

const buscador = document.getElementById("buscador");
const opiniones = document.querySelectorAll(".opinion");
const sinResultados = document.getElementById("sin-resultados");



/*codigo del buscador*/

if (buscador && sinResultados) {
buscador.addEventListener("input",() => {
    const texto = buscador.value.toLowerCase().trim();
    let encontrados = 0;


    opiniones.forEach(o => {
        const contenido = o.textContent.toLowerCase();
        const coincide = contenido.includes(texto);
        o.style.display = contenido.includes(texto) ? "" : "none";
        if (coincide) {
            encontrados++;
        }
    })
    sinResultados.classList.toggle("d-none", encontrados > 0);
} )
}
/* MOSTRAR Y OCULTAR CONTENIDO */

const boton = document.getElementById("botonHistoria");
const contenido = document.getElementById("masHistoria");

if (boton && contenido) {
boton.addEventListener("click", function() {

    if (contenido.style.display === "none") {
        contenido.style.display = "block";
        boton.textContent = "Ver menos";
    } else {
        contenido.style.display = "none";
        boton.textContent = "Ver más";
    }

});
}
/* MODO OSCURO */

const botonModo = document.getElementById("modoOscuro");

if (botonModo) {
botonModo.addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        botonModo.textContent = "Modo claro";
    } else {
        botonModo.textContent = "Modo oscuro";
    }
});
}


/* PAGINAS DE LIBRO */
const libroElemento = document.getElementById('miLibro');

if (libroElemento) {
    // 1. Calculamos el alto exacto disponible debajo del navbar (aprox 115px)
    const altoDisponible = window.innerHeight - 115;
    
    // 2. Como cada hoja tiene proporción 0.71 (400 / 560), calculamos el ancho máximo exacto
    // para que el alto NUNCA supere los píxeles disponibles
    const anchoMaxHoja = Math.floor(altoDisponible * 0.71);

    const pageFlip = new St.PageFlip(libroElemento, {
        width: 400,
        height: 560,
        size: 'stretch',
        minWidth: 250,
        maxWidth: anchoMaxHoja,  // <--- ESTE ES EL TOPE REAL QUE USA LA LIBRERÍA
        minHeight: 350,
        maxHeight: altoDisponible,
        showCover: false,
        usePortrait: true,       // 2 hojas en PC/tablet, 1 hoja en celular
        maxShadowOpacity: 0.5
    });

    pageFlip.loadFromHTML(document.querySelectorAll('#miLibro .pagina'));
}




