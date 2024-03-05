//Crea un array di oggetti che rappresentano degli animali.
//Ogni animale ha un nome, una famiglia e una classe.
const animals = 
[
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'elefante', famiglia: 'elefanti', classe: 'mammiferi' },
    { nome: 'pinguino', famiglia: 'spheniscidae', classe: 'uccelli' },
    { nome: 'orso', famiglia: 'ursidi', classe: 'mammiferi' },
    { nome: 'balena', famiglia: 'balenotteri', classe: 'mammiferi' },
    { nome: 'scoiattolo', famiglia: 'sciuridi', classe: 'mammiferi' },
    { nome: 'aquila', famiglia: 'accipitridae', classe: 'uccelli' }
]
console.log(animals);

//Crea un nuovo array con la lista dei mammiferi.
const mammals = animals.filter(animal => animal.classe === `mammiferi`)
console.log("Questi sono i mammiferi",mammals);

const birds = animals.filter(animal => animal.classe === `uccelli`)
console.log("Questi sono gli uccelli",birds);

