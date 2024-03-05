//Crea un array di oggetti che rappresentano delle persone.
//Ogni persona ha un nome, un cognome e un’età.

const list = [
    {
        name: 'Mario',
        lastname: 'Rossi',
        age: 25
    },
    {
        name: 'Paolo',
        lastname: 'Cipolla',
        age: 17
    },
    {
        name: 'Giuglia',
        lastname: 'Ravanelli',
        age: 18
    },
    {
        name: 'Luca',
        lastname: 'Verdi',
        age: 12
    },
    {
        name: 'Sara',
        lastname: 'Bianchi',
        age: 22
    },
    {
        name: 'Giovanni',
        lastname: 'Neri',
        age: 18
    },
    {
        name: 'Anna',
        lastname: 'Gialli',
        age: 15
    },
    {
        name: 'Marco',
        lastname: 'Blu',
        age: 35
    },
    {
        name: 'Elena',
        lastname: 'Arancioni',
        age: 26
    },
    {
        name: 'Alessio',
        lastname: 'Viola',
        age: 17
    }
];

//Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età
/*
list.forEach (element => {
    if (element.age >= 18){
        element.drive = `Può guidare`
    }else{
        element.drive = `Non può guidare`
    }
})

console.log(list);
*/
const canDrive = list.filter (element => element.age >= 18)
canDrive.forEach (element => {
    element.drive = `Può guidare`
})
console.log("Questa è la lista di chi può guidare",canDrive);

const canNotDrive = list.filter (element => element.age < 18)
canNotDrive.forEach (element => {
    element.drive = `Non può guidare`
})
console.log("Questa è la lista di chi può guidare",canNotDrive);
