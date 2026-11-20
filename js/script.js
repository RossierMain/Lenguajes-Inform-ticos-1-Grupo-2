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
