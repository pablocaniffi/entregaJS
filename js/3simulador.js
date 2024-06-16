// Simulador

let divRowMainSimulador = document.getElementById("dRM");

let incioSimulador = document.createElement("div");
incioSimulador.classList.add("ubiH3");
incioSimulador.classList.add("align-self-end");
let h3Simulador = document.createElement("h3");
h3Simulador.classList.add("tituloPrincipal")
h3Simulador.classList.add("col-5");
h3Simulador.innerText = "Simulador".toUpperCase();
h3Simulador.setAttribute("id","Simulador")
incioSimulador.appendChild(h3Simulador);
divRowMainSimulador.appendChild(incioSimulador);

let parrafoSimulador = document.createElement("p");
parrafoSimulador.classList.add("parrafoMain");
parrafoSimulador.innerText = "Indica que tan estrategas son los pilotos, la probabilidad de tiempo de lluvia, y las chances de que choquen en cada vuelta.";
divRowMainSimulador.appendChild(parrafoSimulador);


let btnSimulador = ["Estrategia" , "Lluvia" , "Choque"];
let tituloSimulador = "";
for (elemento of btnSimulador){
    tituloSimulador =  `
        <h4 id="${elemento}H4" class="tituloSimulador">${elemento}</h4>
        <button id="${elemento}Suma" class="carrito btn btn-outline-warning" data-id="1">+</button>
        <button id="${elemento}Resta" class="carrito btn btn-outline-warning" data-id="1">-</button>
        <div id="${elemento}Resultado" class="tituloSimulador">Resultado: </div>
    `;
    let divSimulador = document.createElement("div");
    divSimulador.innerHTML=tituloSimulador;
    divSimulador.classList.add("btnSimulador");
    divRowMainSimulador.appendChild(divSimulador);
}

let divBtnAceptar =document.createElement("div");
divBtnAceptar.classList.add("col-6");
divBtnAceptar.classList.add("text-center");
divBtnAceptar.classList.add("btn-Aceptar");

let btnAceptar = document.createElement("button");
btnAceptar.classList.add("btn");
btnAceptar.classList.add("btn-primary");
btnAceptar.classList.add("col-3");

btnAceptar.innerText="ACEPTAR";
divBtnAceptar.appendChild(btnAceptar);
divRowMainSimulador.appendChild(divBtnAceptar);

let divBtnEliminar =document.createElement("div");
divBtnEliminar.classList.add("col-6");
divBtnEliminar.classList.add("text-center");
divBtnEliminar.classList.add("btn-Eliminar");

let btnEliminar = document.createElement("button");
btnEliminar.classList.add("btn");
btnEliminar.classList.add("btn-danger");
btnEliminar.classList.add("col-3");

btnEliminar.innerText="ELIMINAR TABLAS";
divBtnEliminar.appendChild(btnEliminar);
divRowMainSimulador.appendChild(divBtnEliminar);




// ESTRATEGIA
let h4Est = document.createElement("h4");
h4Est.classList.add("tituloPrincipal");
let estRes = document.querySelector("#EstrategiaResultado");
estRes.appendChild(h4Est);
let estrategia=0;
let estrategiaSuma = document.querySelector("#EstrategiaSuma");
estrategiaSuma.addEventListener("click", sumadorES);
function sumadorES() {
    estrategia <10 ? estrategia++ : estrategia=10;    
    JSON.stringify(sessionStorage.setItem("estrategia" , estrategia));
    h4Est.innerText = JSON.parse(sessionStorage.getItem("estrategia"));
}
let estrategiaResta = document.querySelector("#EstrategiaResta");
estrategiaResta.addEventListener("click", restadorER);
function restadorER() {
    estrategia<1 ? estrategia=0 : estrategia--;
    JSON.stringify(sessionStorage.setItem("estrategia" , estrategia));
    h4Est.innerText = JSON.parse(sessionStorage.getItem("estrategia"));
}


// LLUVIA
let h4Llu = document.createElement("h4");
h4Llu.classList.add("tituloPrincipal");
let lluRes = document.querySelector("#LluviaResultado");
lluRes.appendChild(h4Llu);
let lluvia = 0;
let lluviaSuma = document.querySelector("#LluviaSuma");
lluviaSuma.addEventListener("click", sumadorLS);
function sumadorLS() {
    lluvia <10 ? lluvia++ : lluvia=10;
    JSON.stringify(sessionStorage.setItem("lluvia" , lluvia));
    h4Llu.innerText = JSON.parse(sessionStorage.getItem("lluvia"));
}
let lluviaResta = document.querySelector("#LluviaResta");
lluviaResta.addEventListener("click", restadorLR);
function restadorLR() {
    lluvia<1 ? lluvia=0 : lluvia --;
    JSON.stringify(sessionStorage.setItem("lluvia" , lluvia));
    h4Llu.innerText = JSON.parse(sessionStorage.getItem("lluvia"));
}

// CHOQUES
let h4Cho = document.createElement("h4");
h4Cho.classList.add("tituloPrincipal");
let choRes = document.querySelector("#ChoqueResultado");
choRes.appendChild(h4Cho);
let choque = 0;
let choqueSuma = document.querySelector("#ChoqueSuma");
choqueSuma.addEventListener("click", sumadorCS);
function sumadorCS() {
    choque<10? choque++ : choque=10;
    JSON.stringify(sessionStorage.setItem("choque" , choque));
    h4Cho.innerText = JSON.parse(sessionStorage.getItem("choque"));
}
let choqueResta = document.querySelector("#ChoqueResta");
choqueResta.addEventListener("click", restadorCR);
function restadorCR() {
    choque<1 ? choque =0 : choque--;
    JSON.stringify(sessionStorage.setItem("choque" , choque));
    h4Cho.innerText = JSON.parse(sessionStorage.getItem("choque"));
}

function carrera (nombre , valor) {
    this.nombre = nombre,
    this.valor =valor
};

let simuladorPiloto = async()=> {
    let rtaSimuladorPiloto = await fetch ("../1pilotos.json");
    let datos = await rtaSimuladorPiloto.json();
    let data = await datos;

    let pilotosCarrera = [];
    for (item of data) {
        pilotosCarrera.push(new carrera(item.nombre , item.valor))
    };

    let i=0; 

    console.log(pilotosCarrera);
    pilotosCarrera.sort( (a , b) => (a.valor<b.valor ? 1 : -1));
    
      
    let h=0;
    for (h=0 ; h<7 ; h++){
        pilotosCarrera[h].valor= (pilotosCarrera[h].valor+((JSON.parse(sessionStorage.getItem("estrategia"))))-((JSON.parse(sessionStorage.getItem("lluvia")))));
    };
    for (h=7 ; h<11 ; h++){
        pilotosCarrera[h].valor= (pilotosCarrera[h].valor+((JSON.parse(sessionStorage.getItem("estrategia"))))-((JSON.parse(sessionStorage.getItem("lluvia")))*0.5))/((JSON.parse(sessionStorage.getItem("choque")))+1);
    };
    
    for (h=11 ; h<pilotosCarrera.length ; h++){
        pilotosCarrera[h].valor= (pilotosCarrera[h].valor+((JSON.parse(sessionStorage.getItem("estrategia"))))-((JSON.parse(sessionStorage.getItem("lluvia")))))/((JSON.parse(sessionStorage.getItem("choque")))+0.1);
    
    
    };
    pilotosCarrera.forEach((numero)=>numero.valor*Math.random()*JSON.parse(sessionStorage.getItem("choque")));
    
    pilotosCarrera.sort( (a , b) => (a.valor<b.valor ? 1 : -1));
    let conductoresOrdenados = pilotosCarrera.map( piloto => piloto.nombre);
    
    Swal.fire({
        position: "top-end",
        icon: "info",
        title: "El ganador es " + pilotosCarrera[0].nombre,
        showConfirmButton: false,
        timer: 3800
    });
    
    tabla = document.createElement("table");
    
    function tablaConductores (conductores) {
        tabla.classList.add("table");
        let tr = document.createElement("tr");  
        let th = document.createElement("th");
        th.setAttribute("scope" , "row");
        th.innerText="Posición";
        let td = document.createElement("td");
        td.innerText="Piloto";
        td.setAttribute("scope" , "row");
        tabla.appendChild(tr);
        tr.appendChild(th);
        tr.appendChild(td);
        for (j=0 ; j<conductores.length ; j++){
            let trCond = document.createElement("tr");  
            let thCond = document.createElement("th");
            thCond.innerText=j+1;
            let tdCond = document.createElement("td");
            tdCond.innerText=conductores[j];
            trCond.appendChild(thCond);
            trCond.appendChild(tdCond);
            tabla.appendChild(trCond);
        };
    }
    tablaConductores(conductoresOrdenados);
    
    divRowMainSimulador.appendChild(tabla);
};

function eliminar (){
    let eliminados = document.querySelector(".table");
    eliminados.parentNode.removeChild(eliminados);
};   

btnAceptar.addEventListener("click" , simuladorPiloto);
btnEliminar.addEventListener("click" , eliminar);
