//Creare un array di oggetti di 10 squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const squadreDiCalcio = [
    { nome: 'Juventus', punti: 0, falliSubiti: 0 },
    { nome: 'Milan', punti: 0, falliSubiti: 0 },
    { nome: 'Inter', punti: 0, falliSubiti: 0 },
    { nome: 'Roma', punti: 0, falliSubiti: 0 },
    { nome: 'Napoli', punti: 0, falliSubiti: 0 },
    { nome: 'Lazio', punti: 0, falliSubiti: 0 },
    { nome: 'Atalanta', punti: 0, falliSubiti: 0 },
    { nome: 'Fiorentina', punti: 0, falliSubiti: 0 },
    { nome: 'Torino', punti: 0, falliSubiti: 0 },
    { nome: 'Sampdoria', punti: 0, falliSubiti: 0 }
];


//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
squadreDiCalcio.forEach(squadra => {
    squadra.punti =  Math.floor(Math.random() * (30 - 1) ) + 1
    squadra.falliSubiti =  Math.floor(Math.random() * (200 - 1) ) + 1

})
console.log(squadreDiCalcio);

//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 
const squadreNomiFalli = squadreDiCalcio.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));
console.log(squadreNomiFalli);
