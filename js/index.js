// inicializador de la página

const miHead = document.head;
const miBody = document.body;


// header
let miHeader = document.createElement("header");
miHeader.classList.add("container-fluid");
miBody.appendChild(miHeader);

let divRowHeader = document.createElement("div");
divRowHeader.classList.add("row");
divRowHeader.classList.add("encabezado");
miHeader.appendChild(divRowHeader);

let imagenHeader = document.createElement("div");
imagenHeader.innerHTML = '<a href="#"><img src="./multimedia/logof1.webp" alt="logoF1" class="logoF1"></a>';
// clase agregada dentro de imagen
imagenHeader.classList.add("col-3");

let h1Titulo = document.createElement("h1");
h1Titulo.classList.add("tituloPrincipal");
h1Titulo.classList.add("col-7");
h1Titulo.innerText = "Formula 1";

divRowHeader.appendChild(imagenHeader);
divRowHeader.appendChild(h1Titulo);
// fin header


// nav
let nav = document.querySelector(".barraNav");
let itemsRedes = nav.querySelectorAll("a");
itemsRedes.forEach((item)=>item.classList.add("redes"));
miBody.appendChild(nav);
// fin nav


// aside (no hay)


// main
let principal = document.createElement("main");
principal.classList.add("principal");
principal.classList.add("container-fluid");

let divRowMain = document.createElement("div");
divRowMain.classList.add("row");
divRowMain.setAttribute("id","dRM");
principal.appendChild(divRowMain);

miBody.appendChild(principal);



// footer

let footer = document.createElement("footer");
footer.classList.add("pie");
footer.classList.add("container-fluid");
    
let divRowFooter = document.createElement("div");
divRowFooter.classList.add("row");
footer.appendChild(divRowFooter);

let imagenFooter1 = document.createElement("div");
imagenFooter1.innerHTML = '<img class= "foto1" src="./multimedia/footerFerrari.webp" alt="logo Ferrari">';
imagenFooter1.classList.add("col-lg-3");
imagenFooter1.classList.add("col-6");
imagenFooter1.classList.add("order-1");
imagenFooter1.classList.add("text-center");
let imagenFooter2 = document.createElement("div");
imagenFooter2.innerHTML = '<img class= "foto2 col-3" src="./multimedia/footerRuedas.webp" alt="Neumáticos">';
imagenFooter2.classList.add("col-lg-3");
imagenFooter2.classList.add("col-6");
imagenFooter2.classList.add("order-2");
imagenFooter2.classList.add("order-lg-3");
imagenFooter2.classList.add("text-center");
let comentarios = document.querySelector(".comentarios");
let botones = document.querySelector(".botones");

divRowFooter.appendChild(imagenFooter1);
divRowFooter.appendChild(comentarios);
divRowFooter.appendChild(imagenFooter2);
divRowFooter.appendChild(botones);

miBody.appendChild(footer);
// fin footer