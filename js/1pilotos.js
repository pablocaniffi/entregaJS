// PILOTOS

let divRowMainPilotos = document.getElementById("dRM");

// Título "Pilotos"
let contenedorH3 = document.createElement("div");
contenedorH3.classList.add("ubiH3");
contenedorH3.classList.add("col-12");
let h3Titulo = document.createElement("h3");
h3Titulo.classList.add("tituloPrincipal");
h3Titulo.classList.add("col-5");
h3Titulo.innerText = "Pilotos".toUpperCase();
h3Titulo.setAttribute("id" , "Pilotos");
contenedorH3.appendChild(h3Titulo);
divRowMainPilotos.appendChild(contenedorH3);

// Cards Pilotos
function piloto (nombre , escuderia , numero , url) {
    this.nombre = nombre,
    this.escuderia = escuderia,
    this.numero = numero,
    this.url = url
};

let seccionCards= document.createElement("section");
seccionCards.classList.add("row");
seccionCards.classList.add("col-12");
divRowMainPilotos.appendChild(seccionCards);
let pilotos = [];
let cardPiloto = async()=> {
    let rtaCardPiloto = await fetch ("../1pilotos.json");
    let datos = await rtaCardPiloto.json();
    let data = await datos;
    for (item of data) {
        pilotos.push(new piloto(item.nombre , item.escuderia , item.numero , item.imagen))
    }
    let i = 0;
    for (i=0 ; i<pilotos.length ; i++){
        let card = document.createElement("section");
        card.classList.add("card");
        card.classList.add("col-lg-4");
        card.classList.add("col-md-6");
        card.classList.add("col-sm-12");
        
        let foto = document.createElement("div");
        foto.classList.add("foto");
        foto.classList.add("text-center");
        foto.innerHTML = pilotos[i].url;
    
        let info = document.createElement("div");
        info.classList.add("info");
        info.classList.add("text-center");
        let infoNombre = document.createElement("li");
        infoNombre.innerText = pilotos[i].nombre;
        let infoEscuderia = document.createElement("li");
        infoEscuderia.innerText = pilotos[i].escuderia;
        let infoNumero = document.createElement("li");
        infoNumero.innerText = pilotos[i].numero;
    
        info.appendChild(infoNombre);
        info.appendChild(infoEscuderia);
        info.appendChild(infoNumero);
        
        card.appendChild(foto);
        card.appendChild(info);
    
        seccionCards.appendChild(card);
    };
};
cardPiloto();



// pilotos.push(new piloto("Esteban Ocon" , "Alpine" , "Número 31" , '<img class="fotoPiloto" src="./multimedia/1esteban-ocon.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Pierre Gasly" , "Alpine" , "Número 10", '<img class="fotoPiloto" src="./multimedia/1pierre-gasly.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Fernando Alonso" , "Aston Martin" , "Número 14", '<img class="fotoPiloto" src="./multimedia/2fernando-alonso.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Lance Stroll" , "Aston Martin" , "Número 18", '<img class="fotoPiloto" src="./multimedia/2lance-stroll.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Charles Leclerc" , "Ferrari" , "Número 16", '<img class="fotoPiloto" src="./multimedia/3charles-leclerc.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Carlos Sainz" , "Ferrari" , "Número 55", '<img class="fotoPiloto" src="./multimedia/3carlos-sainz.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Kevin Magnussen" , "HAAS F1 Team" , "Número 20", '<img class="fotoPiloto" src="./multimedia/4kevin-magnussen.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Nico Hulkenberg" , "HAAS F1 Team" , "Número 27", '<img class="fotoPiloto" src="./multimedia/4nico-hulkenberg.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Lando Norris" , "McLaren F1" , "Número 4", '<img class="fotoPiloto" src="./multimedia/5lando-norris.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Oscar Piastri" , "McLaren F1" , "Número 81", '<img class="fotoPiloto" src="./multimedia/5oscar-piastri.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Lewis Hamilton" , "Mercedes" , "Número 44", '<img class="fotoPiloto" src="./multimedia/6lewis-hamilton.webp" alt="Sargeant">'));
// pilotos.push(new piloto("George Russell" , "Mercedes" , "Número 63", '<img class="fotoPiloto" src="./multimedia/6george-russell.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Max Verstappen" , "Red Bull Racing" , "Número 1", '<img class="fotoPiloto" src="./multimedia/7max-verstappen.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Sergio Pérez" , "Red Bull Racing" , "Número 11", '<img class="fotoPiloto" src="./multimedia/7sergio-perez.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Guanyu Zhou" , "Stake F1 Team" , "Número 24", '<img class="fotoPiloto" src="./multimedia/8guanyu-zhou.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Valteri Bottas" , "Stake F1 Team" , "Número 77", '<img class="fotoPiloto" src="./multimedia/8valtteri-bottas.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Daniel Ricciardo" , "Scuderia Alpha Tauri" , "Número 3", '<img class="fotoPiloto" src="./multimedia/9ricciardo.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Yuki Tsunoda" , "Scuderia Alpha Tauri" , "Número 22", '<img class="fotoPiloto" src="./multimedia/9yuki-tsunoda.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Logan Sargeant" , "Willliams" , "Número 2", '<img class="fotoPiloto" src="./multimedia/10logan-sargeant.webp" alt="Sargeant">'));
// pilotos.push(new piloto("Alexander Albon" , "Williams" , "Número 23", '<img class="fotoPiloto" src="./multimedia/10alexander-albon.webp" alt="Sargeant">'));

