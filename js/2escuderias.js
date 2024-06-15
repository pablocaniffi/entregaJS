// ESCUDERÍAS

let divRowMainEscuderias = document.getElementById("dRM");

// Título
let escuderiasH3 = document.createElement("div");
escuderiasH3.classList.add("ubiH3");
escuderiasH3.classList.add("col-12");
let h3TituloEsc = document.createElement("h3");
h3TituloEsc.classList.add("tituloPrincipal");
h3TituloEsc.classList.add("col-5");
h3TituloEsc.innerText = "Escuderías".toUpperCase();
escuderiasH3.appendChild(h3TituloEsc);
divRowMainEscuderias.appendChild(escuderiasH3);

// Párrafo
let parrafoEscuderias = document.createElement("p");
parrafoEscuderias.classList.add("parrafoMain");
parrafoEscuderias.classList.add("col-12");
parrafoEscuderias.innerText = "Toque cada ícono para visualizar el auto de esa escudería.";
divRowMainEscuderias.appendChild(parrafoEscuderias);

// Botones
let seccionBotonesEsc = document.createElement("section");
seccionBotonesEsc.classList.add("row");
divRowMainEscuderias.appendChild(seccionBotonesEsc);
let escuderia = async () => {
    let rtaEsc = await fetch("../escuderias.json");
    let datos = await rtaEsc.json();
    let data = await datos;
    for (item of data){
        let divEscuderia = document.createElement("div");
        divEscuderia.classList.add("card");
        divEscuderia.classList.add("col-4");
        divEscuderia.classList.add("text-center");
        seccionBotonesEsc.appendChild(divEscuderia);
        let btnEsc = document.createElement("div");
        btnEsc.innerHTML = `<button class="btnEsc"><img src="${item.logo}" alt="${item.nombre}"></button>`
        let i = data.indexOf(item);
        btnEsc.addEventListener("click" , ()=>{            
                Swal.fire({
                    imageUrl:data[i].auto,
                    imageHeight: 150,
                    imageAlt: data[i].nombre,
                    title: data[i].nombre
                });
        })        
        divEscuderia.appendChild(btnEsc);
    }
};
escuderia();
// a veces soy tan groso que ni yo me doy cuenta