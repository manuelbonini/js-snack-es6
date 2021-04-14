// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti,falli subiti.
// Nome sarà l’unica proprietà da compilare,
// le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: 
// Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array 
// i cui elementi contengono solo nomi e falli subiti 
// e stampiamo tutto in console.

// creo un array con le squadre
let arraySquadre = [
    {
        'nome' : 'Juventus',
        'punti' : 0,
        'falli' : 0
    },
    {
        'nome' : 'Inter',
        'punti' : 0,
        'falli' : 0
    },
    {
        'nome' : 'Milan',
        'punti' : 0,
        'falli' : 0
    },
    {
        'nome' : 'Fiorentina',
        'punti' : 0,
        'falli' : 0
    },
    {
        'nome' : 'Roma',
        'punti' : 0,
        'falli' : 0
    }
];

// genero numeri casuali per punti e falli e li inserisco in arraySquadre
const maxPunti = 100;
const maxFalli = 50;

for (var i = 0; i < arraySquadre.length; i++) {
    var thisSquadra = arraySquadre[i];
    thisSquadra.punti = getRandomNumber(0, maxPunti);
    thisSquadra.falli = getRandomNumber(0, maxFalli);
    console.log(thisSquadra);
}

// creo un array con all'interno i nomi delle squadre e i falli subiti
let arrayNomiFalli = [];

for (var i = 0; i < arraySquadre.length; i++) {
    let {nome, falli} = arraySquadre[i];
    var thisSquadra = {
        'nome' : nome,
        'falli' : falli
    };
    arrayNomiFalli.push(thisSquadra);
}

// stampo gli elementi in console
console.log(arrayNomiFalli);





// funzione che genera un numero casuale con il min incluso e il max escluso
function getRandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min) ) + min;
    return randomNumber;
}