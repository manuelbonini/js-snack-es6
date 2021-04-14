// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa 
// con le seguenti proprietà: nome e peso. Stampare a schermo la bici 
// con peso minore utilizzando destructuring e template literal Snack

// Creo un array con nome e peso delle bici
const arrayBici = [
    {
        'nome' : 'stradale',
        'peso' : 10
    },
    {
        'nome' : 'mountainbike',
        'peso' : 15
    },
    {
        'nome' : 'trial',
        'peso' : 7
    },
    {
        'nome' : 'mountainbike',
        'peso' : 12
    },
    {
        'nome' : 'stradale',
        'peso' : 9
    }
];

// inserisco tutti i pesi delle bici all'interno di arrayPeso
let arrayPeso = [];
let piuLeggera;

for (var i = 0; i < arrayBici.length; i++) {
    var thisBici = arrayBici[i];
    arrayPeso[i] = thisBici.peso;
}
// console.log(arrayPeso);


// ipotizzo che la piu leggera sia la prima 
// poi le confronto con le altre
piuLeggera = arrayPeso[0];
// posizionePiuLeggera per sapere la posizione della bici all'interno
// dell'array
let posizionePiuLeggera = 0;
// console.log(piuLeggera);

for( var i = 1; i < arrayPeso.length; i++ ) {
    if ( arrayPeso[i] < piuLeggera ) {
        piuLeggera = arrayPeso[i];
        posizionePiuLeggera = i;
    }
};
// console.log(piuLeggera);

// Destrutturo
let {nome, peso} = arrayBici[posizionePiuLeggera];

// console.log(nome);
// console.log(peso);

const caratteristicheBici = `
    <ul>
        <li>Nome: ${nome}</li>
        <li>Peso: ${peso}</li>
    </ul>
`;

document.getElementById('bici-piu-leggera').innerHTML = caratteristicheBici;