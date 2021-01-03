/******************************
 * File: javialveo.js         *
 * Author: Eduardo Alveo      *
 * Last Modified: 02-Jan-2021 *
 ******************************/

function viewMenu() {
  const containerMenu = document.querySelector("#menuWeb");
  
  containerMenu.classList.toggle("menu--hide");
}

function main() {
  const buttonMenu = document.querySelector("#buttonMenu");
  
  buttonMenu.addEventListener("click", viewMenu);
}

main();
