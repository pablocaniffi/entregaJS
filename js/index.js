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
h1Titulo.classList.add("col-9");
h1Titulo.innerText = "Formula 1";

divRowHeader.appendChild(imagenHeader);
divRowHeader.appendChild(h1Titulo);
// fin header



// aside (puro SASS)
let lateral = document.createElement("aside");
lateral.classList.add("lateral");
miBody.appendChild(lateral);
// fin aside



// nav
let nav = document.querySelector(".encabezado");
let itemsNombre = nav.querySelectorAll("h2");
let itemsRedes = nav.querySelectorAll("a");
itemsNombre.forEach((item)=>item.classList.add("redes"));
itemsRedes.forEach((item)=>item.classList.add("redes"));
// fin nav


// main
let principal = document.createElement("main");
principal.classList.add("principal");
principal.classList.add("container-fluid");

let divRowMain = document.createElement("div");
divRowMain.classList.add("row");


// Título "Pilotos"
let h3Titulo = document.createElement("h3");
h3Titulo.classList.add("tituloPrincipal");
h3Titulo.classList.add("col-12");
h3Titulo.innerText = "Pilotos".toUpperCase();
divRowMain.appendChild(h3Titulo);
principal.appendChild(divRowMain);

// Cards Pilotos
function piloto (nombre , escuderia , numero) {
    this.nombre = nombre,
    this.escuderia = escuderia,
    this.numero = numero
};

let pilotos = [];
pilotos.push(new piloto("Esteban Ocon" , "Alpine" , "Número 31"));
pilotos.push(new piloto("Pierre Gasly" , "Alpine" , "Número 10"));
pilotos.push(new piloto("Fernando Alonso" , "Aston Martin" , "Número 14"));
pilotos.push(new piloto("Lance Stroll" , "Aston Martin" , "Número 18"));
pilotos.push(new piloto("Charles Lecler" , "Ferrari" , "Número 16"));
pilotos.push(new piloto("Carlos Sainz" , "Ferrari" , "Número 55"));
pilotos.push(new piloto("Kevin Magnussen" , "HAAS F1 Team" , "Número 20"));
pilotos.push(new piloto("Nico Hulkenberg" , "HAAS F1 Team" , "Número 27"));
pilotos.push(new piloto("Lando Norris" , "McLaren F1" , "Número 4"));
pilotos.push(new piloto("Oscar Piastri" , "McLaren F1" , "Número 81"));
pilotos.push(new piloto("Lewis Hamilton" , "Mercedes" , "Número 44"));
pilotos.push(new piloto("George Russell" , "Mercedes" , "Número 63"));
pilotos.push(new piloto("Max Verstappen" , "Red Bull Racing" , "Número 1"));
pilotos.push(new piloto("Sergio Pérez" , "Red Bull Racing" , "Número 11"));
pilotos.push(new piloto("Guanyu Zhou" , "Stake F1 Team" , "Número 24"));
pilotos.push(new piloto("Valteri Bottas" , "Stake F1 Team" , "Número 77"));
pilotos.push(new piloto("Daniel Ricciardo" , "Scuderia Alpha Tauri" , "Número 3"));
pilotos.push(new piloto("Yuki Tsunoda" , "Scuderia Alpha Tauri" , "Número 22"));
pilotos.push(new piloto("Logan Sargeant" , "Willliams" , "Número 2"));
pilotos.push(new piloto("Alexander Albon" , "Williams" , "Número 23"));

function competidor (conductor) {
    let i = 0;
    for (i=0 ; i<conductor.length ; i++){
        let card = document.createElement("section");
        card.classList.add("card");
        card.classList.add("col-lg-4");
        card.classList.add("col-md-6");
        card.classList.add("col-sm-12");

        let foto = document.createElement("div");
        foto.classList.add("foto");
    
        let info = document.createElement("ul");
        info.classList.add("info")
        let infoNombre = document.createElement("li");
        infoNombre.innerText = conductor[i].nombre;
        let infoEscuderia = document.createElement("li");
        infoEscuderia.innerText = conductor[i].escuderia;
        let infoNumero = document.createElement("li");
        infoNumero.innerText = conductor[i].numero;
    
        info.appendChild(infoNombre);
        info.appendChild(infoEscuderia);
        info.appendChild(infoNumero);
    
        card.appendChild(foto);
        card.appendChild(info);
    
        divRowMain.appendChild(card);
    };
};
competidor(pilotos);

// Simulador
miBody.appendChild(principal);



// footer
let footer = document.createElement("footer");
footer.classList.add("pie");
footer.classList.add("container-fluid");

let divRowFooter = document.createElement("div");
divRowFooter.classList.add("row");
footer.appendChild(divRowFooter);

let imagenFooter1 = document.createElement("div");
imagenFooter1.innerHTML = '<img class= "foto1 col-2" src="./multimedia/footerFerrari.webp" alt="logo Ferrari">';
let imagenFooter2 = document.createElement("div");
imagenFooter2.innerHTML = '<img class= "foto2 col-3" src="./multimedia/footerRuedas.webp" alt="Neumáticos">';
let comentarios = document.querySelector(".comentarios");
let botones = document.querySelector(".botones");

divRowFooter.appendChild(imagenFooter1);
divRowFooter.appendChild(comentarios);
divRowFooter.appendChild(imagenFooter2);
divRowFooter.appendChild(botones);

miBody.appendChild(footer);
// fin footer
