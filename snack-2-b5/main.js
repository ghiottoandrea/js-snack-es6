//Crea 10 oggetti che rappresentano una zucchina.
const zucchine = [
    { varieta: "Zucchina nera", peso: 0.3, lunghezza: 15 },
    { varieta: "Zucchina romanesca", peso: 0.25, lunghezza: 12 },
    { varieta: "Zucchina trombetta", peso: 0.4, lunghezza: 18 },
    { varieta: "Zucchina lunga fiorentina", peso: 0.35, lunghezza: 16 },
    { varieta: "Zucchina striata di Napoli", peso: 0.27, lunghezza: 14 },
    { varieta: "Zucchina tonda di Piacenza", peso: 0.22, lunghezza: 10 },
    { varieta: "Zucchina siciliana", peso: 0.38, lunghezza: 17 },
    { varieta: "Zucchina bianca triestina", peso: 0.33, lunghezza: 15 },
    { varieta: "Zucchina gialla", peso: 0.28, lunghezza: 13 },
    { varieta: "Zucchina pâtisson", peso: 0.32, lunghezza: 14 }
];

//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
const zucchineLunghe = zucchine.filter(zucchina => zucchina.lunghezza >= 15)
console.log(`Queste zucchine superano i 15 cm`,zucchineLunghe);

const zucchineCorte = zucchine.filter(zucchina => zucchina.lunghezza < 15)
console.log(`Queste zucchine non superano i 15 cm`,zucchineCorte);


//Infine stampa separatamente quanto pesano i due gruppi di zucchine

let lunghePeso = 0;
zucchineLunghe.forEach (zucchina => lunghePeso += zucchina.peso)
lunghePeso = Number(lunghePeso.toFixed(2))
console.log(`Le zucchine più lunghe pesano `,lunghePeso);

let cortePeso = 0;
zucchineCorte.forEach (zucchina => cortePeso += zucchina.peso)
console.log(`Le zucchine più corte pesano `,cortePeso);