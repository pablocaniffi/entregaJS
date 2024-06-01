// inicializador de la página

const miHead = document.head;
const miBody = document.body;

// header
let miHeader = document.createElement("header");
miHeader.classList.add("container-fluid");
miBody.appendChild(miHeader);

let divRow = document.createElement("div");
divRow.classList.add("row");
divRow.classList.add("encabezado");
miHeader.appendChild(divRow);

let imagenHeader = document.createElement("a");
imagenHeader.innerHTML = '<a href="../index.html"><img src="../multimedia/inicio/1logof1.webp" alt="logoF1" class="logoF1"></a>'; 
// ya dentro del propio innerHTML está su clase
imagenHeader.classList.add("col-4");

let h1Titulo = document.createElement("h1");
h1Titulo.classList.add("tituloPrincipal");
h1Titulo.classList.add("col-8");
h1Titulo.innerText = "Formula 1";

divRow.appendChild(imagenHeader);
divRow.appendChild(h1Titulo);
// fin header

// nav
let navegador = document.createElement("nav");
nav.classList.add("content-fluid");
miBody.appendChild(navegador);

// navegador.appendChild(divRow);