/******************************
 * File: javialveo.js         *
 * Author: Eduardo Alveo      *
 * Last Modified: 10-Apr-2021 *
 ******************************/

function viewMenu() {
  const containerMenu = document.querySelector("#menuWeb");
  
  containerMenu.classList.toggle("navbar--hide");
}

function main() {
  const buttonMenu = document.querySelector("#buttonMenu");
  
  buttonMenu.addEventListener("click", viewMenu);
}

main();
