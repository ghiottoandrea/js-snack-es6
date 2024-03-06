//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
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

//Calcola quanto pesano tutte le zucchine.

let sum = 0;
zucchine.forEach (zucchina => {
    sum += zucchina.peso
})
console.log(`Le zucchine in totale pesano ${sum}`);