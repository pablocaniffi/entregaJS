
// cosas a hacer
// ver si vale la pena el dark-mode
// ordenar bien la página

// ARCHIVO CON LAS ENTREGAS 1 Y 2

alert ("Simulador de carrera:");

function competidor (piloto , escuderia , puntaje) {
    this.piloto = piloto,
    this.escuderia = escuderia,
    this.puntaje = puntaje
};

let autoGanador = [];
autoGanador.push (new competidor("Verstappen" , "Red Bull" , 9));
autoGanador.push (new competidor("Russell" , "Mercedes" , 7));
autoGanador.push (new competidor("Ocon" , "Alpine" , 4));


function campeonato (autoGanador) {
    
    do {
        let rival = parseInt(Math.round(prompt("Elige el número de tu rival: \n1-"+autoGanador[0].piloto+" con "+autoGanador[0].escuderia + "\n2-"+autoGanador[1].piloto+" con "+autoGanador[1].escuderia + "\n3-"+autoGanador[2].piloto+" con "+autoGanador[2].escuderia)));
    
        if (rival>0 && rival<=autoGanador.length){
        
        let mi_coche = 0;
        let mi_escuderia = ["Williams" , "HAAS" , "McLaren" , "Mercedes" , "Ferrari"];
        let mi_piloto = ["Zhou" , "Sargeant" , "Pérez" , "Hamilton" , "Alonso"];
        
            let pregunta1 = parseInt(Math.round(prompt("Elige el número de tu auto: \n1-"+ mi_escuderia[0]+ "\n2-"+mi_escuderia[1]+ "\n3-"+mi_escuderia[2] +"\n4-"+mi_escuderia[3]+ "\n5-"+mi_escuderia[4] )));
                if (pregunta1 < 3 || pregunta1 > 5){
                    alert ("Con ese auto no vas a ganar.");
                    mi_coche=0;
                } else {
                    mi_coche=pregunta1;
                }
                let pregunta2 = parseInt(Math.round(prompt("Elige el número de tu piloto: \n1-"+mi_piloto[0]+"\n2-"+mi_piloto[1] +"\n3-"+mi_piloto[2]+"\n4-"+mi_piloto[3]+"\n5-"+mi_piloto[4])));
                if (pregunta2 < 3 || pregunta2 > 5 ){
                    alert ("Con ese piloto no vas a ganar.");
                    mi_coche=0;
                } else {
                    mi_coche= mi_coche + pregunta2;
                }
                let pregunta3 = parseInt(prompt("Elige el circuito: \n1-Imola \n2-Suzuka \n3-Spa \n4-Silverston \n5-Monaco "));
                if (pregunta3 < 1 || pregunta3 > 5 ){
                    alert ("Circuito no válido.");
                    mi_coche=0;
                } else {
                    mi_coche= mi_coche/pregunta3;
                }

                let declaracion1 = mi_piloto.filter((variable) =>{return variable === mi_piloto[pregunta2-1]} );
                let declaracion2 = mi_escuderia.filter((variable)=>{return variable === mi_escuderia[pregunta1-1]});
                let declaracion = declaracion1.concat(declaracion2);
    
                alert("Se generó una carrera entre " + declaracion + " vs " + autoGanador[rival-1].piloto + "," + autoGanador[rival-1].escuderia);
    
        
                if (mi_coche > autoGanador[rival-1].puntaje){
                    console.log ("GANASTE: sos ingeniero de pista.");
                }else if (mi_coche > 3) {
                    console.log ("PERDISTE: Estuviste cerca, mala detención en boxes.");
                }else{
                    console.log ("PERDISTE: No sos parte de una escudería competitiva...");
                }
                
                control = prompt("Seguimos jugando? S/N").toUpperCase();            
        } else{
            alert ("No ingresó un número válido. \nIntente nuevamente.");
        };
    
    }
    while (control === "S");
    
};   


campeonato(autoGanador);


// instrucciones entrega 2:
//     <header></header>
//     <nav></nav>
//     <aside></aside>
//     <main>
//         <h1>Querés competir en la F1?</h1>
//         <ol type="1">
//             <li>Elige tu rival</li>
//             <li>Elige tu piloto</li>
//             <li>Escoge sabiamente entre las opciones disponibles para ganar.</li>
//         </ol>
//     </main>
//     <footer></footer> 


// dark mode
// btnColorMode.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
//     if (document.body.classList.contains("dark-mode")) {
        //  document.body.classList.contains("dark-mode");
//         btnColorMode.innerText = "☀️"
//     } else {
//         btnColorMode.innerText = "🌙"
        // document.body.classList.remove("dark-mode")
//     }

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


// let valor = [9 , 10 , 13 , 8, 19 , 18 , 6 , 2 , 17 , 15 , 12 , 14 , 20 , 16 , 4 , 7 , 5 , 11 , 1 , 3];
