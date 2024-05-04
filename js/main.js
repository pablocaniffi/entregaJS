alert ("Podés ganarle a Verstappen?");

let verstappen = 7;

function campeonato (autoGanador) {
    let mi_coche = 0;
    do {
        let pregunta1 = parseInt(prompt("Elige el número del auto: 1-Williams 2-HAAS 3-McLaren 4-Mercedes 5-Ferrari" ));
            if (pregunta1 < 3 || pregunta1 > 5){
                alert ("Con ese auto no vas a ganar.");
                mi_coche=0;
            } else {
                mi_coche=pregunta1;
            }
            let pregunta2 = parseInt(prompt("Elige el número de tu piloto: 1-Zhou 2-Sargeant 3-Perez 4-Hamilton 5-Alonso"));
            if (pregunta2 < 3 || pregunta2 > 5 ){
                alert ("Con ese piloto no vas a ganar.");
                mi_coche=0;
            } else {
                mi_coche= mi_coche + pregunta2;
            }
            let pregunta3 = parseInt(prompt("Elige el circuito: 1-Imola 2-Suzuka 3-Spa 4-Silverston 5-Monaco "));
            if (pregunta3 < 1 || pregunta3 > 5 ){
                alert ("Circuito no válido.");
                mi_coche=0;
            } else {
                mi_coche= mi_coche/pregunta3;
            }

    
            if (mi_coche > autoGanador){
                console.log ("GANASTE: sos ingeniero de pista.");
            }else if (mi_coche > 3) {
                console.log ("PERDISTE: Estuviste cerca, mala detención en boxes.");
            }else{
                console.log ("PERDISTE: No sos parte de una escudería competitiva...");
            }
            
            control = prompt("Seguimos jugando? S/N").toUpperCase();            
        }        
        while (control === "S");
};   

campeonato(verstappen);