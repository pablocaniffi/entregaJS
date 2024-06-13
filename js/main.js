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

// cosas a hacer
// scroll hasta cada item de pilotos-simulador-escuderías-footer
// hacer fetch con async-await con las escuderías.
// ver si vale la pena el dark-mode