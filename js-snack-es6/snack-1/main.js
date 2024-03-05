//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

const automobili = [
    { marca: 'Fiat', modello: '500', alimentazione: 'benzina' },
    { marca: 'Volkswagen', modello: 'Golf', alimentazione: 'diesel' },
    { marca: 'Renault', modello: 'Clio', alimentazione: 'benzina' },
    { marca: 'Tesla', modello: 'Model 3', alimentazione: 'elettrico' },
    { marca: 'Audi', modello: 'A3', alimentazione: 'diesel' },
    { marca: 'Toyota', modello: 'Yaris', alimentazione: 'metano' },
    { marca: 'Hyundai', modello: 'Kona', alimentazione: 'elettrico' },
    { marca: 'Opel', modello: 'Corsa', alimentazione: 'gpl' },
    { marca: 'Ford', modello: 'Fiesta', alimentazione: 'benzina' },
    { marca: 'BMW', modello: 'X5', alimentazione: 'diesel' }
];


automobili.forEach(auto => {
    console.log(auto);
})

//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
//Infine stampa separatamente i 3 array.

const AutoBenzina = automobili.filter(auto => auto.alimentazione === `benzina`)
console.log("Queste son macchine a benzina",AutoBenzina);

const AutoElettriche = automobili.filter(auto => auto.alimentazione === `elettrico`)
console.log("Queste son macchine elettriche",AutoElettriche);

const AutoDiesel = automobili.filter(auto => auto.alimentazione === `diesel`)
console.log("Queste son macchine a diesel",AutoDiesel);

const AutoGpl = automobili.filter(auto => auto.alimentazione === `gpl`)
console.log("Queste son macchine a gpl",AutoGpl);

const AutoMetano = automobili.filter(auto => auto.alimentazione === `metano`)
console.log("Queste son macchine a metano",AutoMetano);


