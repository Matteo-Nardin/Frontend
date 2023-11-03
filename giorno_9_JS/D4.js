/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area (l1,l2){
    a = l1 * l2;
    return a;
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(x,y){
    z = x + y;
    if(x == y){
        z = (x + y)*3;
    }
    
    return z;
}


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(y){
    let x = 19
    z = x - y;
    if(y > 19){
        z = Math.abs(x - y);
    }
    return z;
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if( n >= 20 && n <= 100 || n === 400){
        return true;
    }
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

// function epify(s){
//     z = "EPICODE" + s;
//     return z;
// }

//provare con indexOf
function epify(s){
    let z = "";
    z = s;
    if(s.search("EPICODE") === -1){
        console.log(s.search("EPICODE"))
        z = "EPICODE " + s;
    }
    return z;
}
console.log(epify("EPICODE to"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

//controllo se intero?
function check3and7(x){
    if(x%3 === 0){
        console.log( x, "è multiplo di 3")
    }else if(x%7 === 0){
        console.log( x, "è multiplo di 7")
    }else{
        console.log( x , "non è multiplo ne di 3 ne di 7")
    }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(s){
    let z = "";
    for (let i = s.length - 1; i >= 0; i--) { 
        z += s[i];
    }
    return z;
}
console.log(reverseString("hello"))

// function reverseString(s) {
//     return str.split("").reverse().join("");
// }

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(s){
    let arr = s.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    return arr.join(" ");
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
// s="hello";
function cutString(s){
    let arr = s.split("");
    arr.splice(0,1);
    arr.splice(s.length, 1);

    return arr.join(" ");
}
// console.log(cutString(s));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n){
    let arr=[];
    let x;
    for(let i = 0; i < n; i++){
        x = Math.floor(Math.random() * 10);
        arr.push(x);
    }
    return arr;
}
console.log(giveMeRandom(5));
