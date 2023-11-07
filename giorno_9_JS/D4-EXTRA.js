// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
let array=[1,6,4,5,10];
function checkArray(arr){
    let z = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > 5){
            console.log(arr[i], "è maggiore di 5");
            z += arr[i];
        }
    }
    return z;
}
console.log(checkArray(array))
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCart = [
    {
        "price": 2,
        "name": "prodotto 1",
        "id": 1,
        "quantity": 4
    },
    {
        "price": 5,
        "name": "prodotto 2",
        "id": 2,
        "quantity": 2
    }
]

function shoppingCartTotal(cart){
    let z = 0;
    for(let i = 0; i < cart.length; i++){
        z += cart[i].price*cart[i].quantity;
    }
    return z;
}
console.log(shoppingCartTotal(shoppingCart));
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
prodotto_3 =
{
    "price": 22,
    "name": "prodotto 3",
    "id": 3,
    "quantity": 2
}
function addToShoppingCart(obj){
    shoppingCart.push(obj);
}
addToShoppingCart(prodotto_3);
console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

// function maxShoppingCart(cart){
//     for(let i = 0; i<cart.length; i++){
//         for(let j = 0; j < (cart.length - i - 1); j++){
//             if (cart[j].price < cart[j+1].price) { 
//                 let temporaneo = cart[j].price 
//                 cart[j].price = cart[j+1].price 
//                 cart[j+1].price = temporaneo
//             } 
//         }
//     }
//     return cart[j+1].price;
// }

// console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(cart){
    return cart[cart.length-1];
}
console.log(latestShoppingCart(shoppingCart))

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale(generato dentro) non è maggiore di x per tre volte di fila.
*/

// let x = Math.floor(Math.random()*10);
// console.log("x =",x);

// function loopUntil(n){
//     let k = 0;
//     let y;
//     while(k<3){
//         y = Math.floor(Math.random()*10);
//         console.log(y);
//         if(y > n){
//             k++;
//         }
//     }
// }
// loopUntil(x);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
d=[2,3,"2",5];
function average(arr){
    let x = 0;
    let y = 0;
    for(let i=0; i< arr.length; i++){
        if(typeof arr[i] === "number"){
            x += arr[i];
            y += 1;
        }
    }
    console.log(x/y);
}
average(d);

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
s = ["a", "abcdf", "abc"];

function longest(arr){
    for(let i = 0; i<arr.length; i++){

        for(let j = 0; j <arr.length -i -1; j++){
            if(arr[j].length < arr[j+1].length){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
            }
        }
        console.log(arr[i], "è composto da ", arr[i].length, "stringhe");
    }
    return (arr[0]);
}

console.log(longest(s));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
