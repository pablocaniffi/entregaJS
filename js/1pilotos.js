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
function piloto (nombre , escuderia , numero , url , valor) {
    this.nombre = nombre,
    this.escuderia = escuderia,
    this.numero = numero,
    this.url = url,
    this.valor = valor
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
        pilotos.push(new piloto(item.nombre , item.escuderia , item.numero , item.imagen , item.valor))
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


