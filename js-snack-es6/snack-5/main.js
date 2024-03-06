//Creare un array di 10 oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const biciDaCorsa = [
    { nome: "Bianchi Oltre XR4", peso: 7.2 },
    { nome: "Specialized Tarmac SL7", peso: 7.5 },
    { nome: "Cannondale SuperSix Evo", peso: 7.0 },
    { nome: "Trek Emonda SLR", peso: 6.5 },
    { nome: "Pinarello Dogma F12", peso: 7.1 },
    { nome: "Colnago C64", peso: 7.3 },
    { nome: "Scott Addict RC", peso: 6.9 },
    { nome: "Giant TCR Advanced", peso: 7.4 },
    { nome: "Merida Reacto", peso: 7.2 },
    { nome: "Ridley Helium SLX", peso: 6.7 }
];

//Stampare in console la bici con peso minore utilizzando destructuring e template literal

let minWeight = biciDaCorsa[0].peso
console.log(minWeight);
let name;

biciDaCorsa.forEach(bici => {
    if (minWeight > bici.peso) {
        minWeight = bici.peso
        name = bici.nome
    }
})

console.log(name, minWeight);
console.log(`La bici con peso minore è: ${name} con un peso di ${minWeight} kg`);

