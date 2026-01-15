// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20 % dei casi, il dado si "incastra" e la Promise va in reject.

// function lanciaDado(result) {
//     return new Promise((resolve, reject) => {
//         console.log('Sto lanciando il dado..');

//         setTimeout(() => {
//             const siIncastra = Math.random() < 0.2;

//             if (siIncastra) {
//                 reject('Il dado si è incastrato');
//                 return;
//             } else {
//                 const risultato = Math.floor(Math.random() * 6) + 1;
//                 resolve(risultato);
//             }

//         }, 3000)
//     });
// }

// lanciaDado()
//     .then(numero => console.log("E' uscito il numero:", numero))
//     .catch(error => console.log(error));


// Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".

function creaLanciaDado() {
    let ultimoNum = null

    return function () {
        return new Promise((resolve, reject) => {
            console.log("Sto lanciando il dado..");

            setTimeout(() => {
                if (Math.random() < 0.2) {
                    ultimoNum = null;
                    reject("Il dado si è incastrato");
                    return;
                } else {
                    const num = Math.floor(Math.random() * 6) + 1;
                    if (num === ultimoNum) {
                        console.log("Incredibile!");
                    }

                    ultimoNum = num
                    resolve(num)
                }
            }, 3000)
        });
    };
}

const lancia = creaLanciaDado();

lancia()
    .then(res => {
        console.log("E' uscito il numero:", numero)
        lancia()
            .then(res => console.log("E' uscito il numero:", numero))
            .catch(error => console.log(error));
    })
    .catch(error => console.log(error));


