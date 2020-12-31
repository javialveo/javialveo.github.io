/*********************************
 * Archivo: javialveo.js         *
 * Autor: Eduardo Alveo          *
 * Fecha-Modificado: 30-Dic-2020 *
 *********************************/

function mostrarMenuWeb() {
  const contenedorMenu = document.querySelector("#menuWeb");
  
  contenedorMenu.classList.toggle("menu-ocultar");
}

function main() {
  const botonMenu = document.querySelector("#botonMenu");
  
  botonMenu.addEventListener("click", mostrarMenuWeb);
}

main();
