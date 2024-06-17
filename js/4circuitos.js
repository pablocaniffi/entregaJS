// CIRCUITOS

let divRowMainCircuitos = document.querySelector('#dRM');

let incioCircuitos = document.createElement("div");
incioCircuitos.classList.add("ubiH3");
incioCircuitos.classList.add("align-self-end");
let h3Circuitos = document.createElement("h3");
h3Circuitos.classList.add("tituloPrincipal")
h3Circuitos.classList.add("col-5");
h3Circuitos.innerText = "Circuitos".toUpperCase();
h3Circuitos.setAttribute("id","Circuitos")
incioCircuitos.appendChild(h3Circuitos);
divRowMainCircuitos.appendChild(incioCircuitos);


let divListaCircuitos = document.createElement("div");
divListaCircuitos.classList.add("row");
divRowMainCircuitos.appendChild(divListaCircuitos);
let listaCircuitos = async() =>{
    fetch("http://ergast.com/api/f1/circuits.json")
    .then((response)=>response.json())
    .then((data)=>{
        data.MRData.CircuitTable.Circuits.forEach((elemento)=>{
            let ul = document.createElement("ul");
            ul.classList.add("card");
            ul.classList.add("col-3");
            ul.classList.add("text-center");
            ul.setAttribute("type" , "none");
            let li1 = document.createElement("li");
            li1.classList.add("info");
            li1.innerHTML =`Nombre: ${elemento.circuitName}`;
            let li2 = document.createElement("li");
            li2.classList.add("info");
            li2.innerHTML =`Localidad: ${elemento.Location.locality}`;
            let li3 = document.createElement("li");
            li3.classList.add("info");
            li3.innerHTML =`País: ${elemento.Location.country}`;  
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            divListaCircuitos.appendChild(ul);
        });
    });
};
listaCircuitos();

