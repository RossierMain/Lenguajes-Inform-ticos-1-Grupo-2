/*constantes*/

const buscador = document.getElementById("buscador");
const opiniones = document.querySelectorAll(".opinion");
const sinResultados = document.getElementById("sin-resultados");



/*codigo del buscador*/

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
/* MOSTRAR Y OCULTAR CONTENIDO */

const boton = document.getElementById("botonHistoria");
const contenido = document.getElementById("masHistoria");

boton.addEventListener("click", function() {

    if (contenido.style.display === "none") {
        contenido.style.display = "block";
        boton.textContent = "Ver menos";
    } else {
        contenido.style.display = "none";
        boton.textContent = "Ver más";
    }

});
/* MODO OSCURO */

const botonModo = document.getElementById("modoOscuro");

botonModo.addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        botonModo.textContent = "Modo claro";
    } else {
        botonModo.textContent = "Modo oscuro";
    }
});/* MODO OSCURO */

const botonModo = document.getElementById("modoOscuro");

botonModo.addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        botonModo.textContent = "Modo claro";
    } else {
        botonModo.textContent = "Modo oscuro";
    }
});
