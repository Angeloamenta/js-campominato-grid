// Consegna
// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// // creo gli elementi che mi serviranno e li inserisco sull'html

// // seleziono il container
const container = document.querySelector(".container");
console.log(container);
// // creo header
 const header = document.createElement("header");
// // gli aggiungo la classe adatta
 header.classList.add("header");
 console.log(header);
// // lo metto dentro il mio container
container.append(header);
// // creo header dx e sx
 const headerSx = document.createElement("div");
headerSx.classList.add("header-sx");
console.log(headerSx);
 const headerDx = document.createElement("div");
 headerDx.classList.add("header-dx");
 console.log(headerDx);
header.append(headerSx, headerDx);

// ricreo contenuto della parte sinistra con ``
let titleSx = 
`
<img src="https://yt3.ggpht.com/ytc/AKedOLTO2XVhtyMr24Dnz6QJ-Lsj_05XHim-qMoF6PRc=s176-c-k-c0x00ffffff-no-rj" alt="">
<h1>Campo Minato: la griglia</h1>
`;

// adesso devo ricreare la parte destra come fatto per l'header
const inputMood = document.createElement("div");
inputMood.classList.add("input-mood");
console.log(inputMood);
const contentDx = 
`
<label for="difficulty">Difficoltà:</label>
<select id="difficulty">
    <option class="easy" value="easy">Easy</option>
    <option class="medium" value="medium">Medium</option>
    <option class="hard" value="hard">Hard</option>
</select>
`;
headerDx.append(inputMood);
inputMood.innerHTML = contentDx

let buttons = document.createElement("button");
buttons.classList.add("button-play");
// ho aggiunto innerHtml con "play" sul bottone perch altrimenti il bottone risultava vuoto
buttons.innerHTML = "Play";
headerDx.append(buttons);

// ricreo il main
const main = document.createElement("main");
container.append(main);

// creo il container grid 
const containerGrid = document.createElement("div");
containerGrid.classList.add("container-grid")
main.append(containerGrid);

containerGrid.innerHTML = `<div class="title-grid">
<h1>Benvenuto su Campo Minato:</h1>
<h3> seleziona la tua difficoltà </h3>
</div>`
let titleGrid = document.querySelector(".title-grid");
console.log(titleGrid);

headerSx.innerHTML = titleSx;


const number100 = 100;
const number81 = 81;
const number49 = 49;
console.log(number100);
// const button = document.querySelector(".button-play");


// const containerGrid = document.querySelector(".container-grid");
// console.log(containerGrid);

// creo un evento legato al bottone 
buttons.addEventListener("click", function() {

    // creo delle costanti legate al value delle mie option in modo da richiamarlo nell if a seguire
    const easy = document.querySelector(".easy").value;
    const medium = document.querySelector(".medium").value;
    const hard = document.querySelector(".hard").value;
    // costante del mio label in modo da poter fare la differenza con il value delle altre costanti
    const difficulty = document.getElementById("difficulty").value;
    
    // se il value (che ho aggiunto nella const difficulty.value e == ad easy faccio questo)
    if (difficulty == "easy") {
        for (let i = 1; i < number100 +1; i++) {
            // creo un numero di elementi che ho indicato con le costanti create sopra rispettivamente di 100, 81 e 49 a cui aggiungo la classe adatta creata con il css e li "appendo". tutto cio con ogni value a mia disposizione
            titleGrid.classList.add("none");
            const square100 = document.createElement("div");
            square100.classList.add("square-100");
            containerGrid.append(square100);
            square100.append(i);


        } 
    } else if (difficulty == "medium") {
        for (let i = 1; i < number81 +1; i++) {
            titleGrid.classList.add("none");
            const square81 = document.createElement("div");
            square81.classList.add("square-81");
            containerGrid.append(square81);
            square81.append(i);   
        } 
    } else  {
        for (let i = 1; i < number49 +1; i++) {
            titleGrid.classList.add("none");
            const square49 = document.createElement("div");
            square49.classList.add("square-49");
            containerGrid.append(square49);
            square49.append(i);    
        } 
    }
});