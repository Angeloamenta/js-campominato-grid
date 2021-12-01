// Consegna
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// // creo gli elementi che mi serviranno e li inserisco sull'html

// // seleziono il container
// const container = document.querySelector(".container");
// console.log(container);
// // creo header
// const header = document.createElement("header");
// // gli aggiungo la classe adatta
// header.classList.add("header");
// console.log(header);
// // lo metto dentro il mio container
// container.append(header);
// // creo header dx e sx
// const headerSx = document.createElement("div");
// headerSx.classList.add("header-sx");
// console.log(headerSx);
// const headerDx = document.createElement("div");
// headerDx.classList.add("header-dx");
// console.log(headerDx);
// header.append(headerSx, headerDx);

const number100 = 100;
const number81 = 81;
const number49 = 49;
console.log(number100);
const button = document.querySelector(".button-play");
console.log(button);

const containerGrid = document.querySelector(".container-grid");
console.log(containerGrid);

button.addEventListener("click", function() {
    const easy = document.querySelector(".easy").value;
    const medium = document.querySelector(".medium").value;
    const hard = document.querySelector(".hard").value;

    const difficulty = document.getElementById("difficulty").value;
    
    if (difficulty == "easy") {
        for (let i = 0; i < number100; i++) {
            const square100 = document.createElement("div");
            square100.classList.add("square-100");
            containerGrid.append(square100);    
        } 
    } else if (difficulty == "medium") {
        for (let i = 0; i < number81; i++) {
            const square81 = document.createElement("div");
            square81.classList.add("square-81");
            containerGrid.append(square81);    
        } 
    } else  {
        for (let i = 0; i < number49; i++) {
            const square49 = document.createElement("div");
            square49.classList.add("square-49");
            containerGrid.append(square49);    
        } 
    }
});