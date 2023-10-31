/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

{
  let a = 3
  let b = 4;

  a > b ? console.log( a, ">", b) : console.log( a, "<", b);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
{
  let x = 5;
  if(x != 5){
  console.log("not equal")
  }
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
{
  let x = 3;
  if( x%5 == 0){
  console.log(x ,"divisibile per 5")
  }else{
    console.log(x ,"non è un multiplo di 5")
  }
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
{
  let a = 5;
  let b = 8;

  if((a == 8 || b == 8) || (a+b==8 || a-b==8)){
    console.log("uno dei 2 valori è 8");
  }
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
{
  let totalShoppingCart = 60;
  let spedizione = 10;

  if(totalShoppingCart >= 50){
    console.log("il tuo saldo supera i 50 euro, la spedizione sarà gratuita")
  }else{
    console.log("il saldo totale è : ", totalShoppingCart + spedizione, "euro")
  }
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

{
  let totalShoppingCart = 100;
  let spedizione = 10;

  if(totalShoppingCart-(totalShoppingCart*0.2) >= 50){
    console.log("il tuo saldo supera i 50 euro, la spedizione sarà gratuita", totalShoppingCart )
  }else{
    console.log("il saldo totale è : ", totalShoppingCart + spedizione, "euro")
  }
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
{
  //ci ho messo troppo!
  let x = 52, y = 21 , z = 3;

  if (x>y && x>z){
    if (y>z)
    {
      console.log(x ,y ,z);
    }
    else //y<z
    {
      console.log(x,z,y);
    }
  }
  else if (y>x && y >z){
    if (x>z)
    {
      console.log(y,x,z);
    }
    else//x<z
    {
      console.log(y,z,x);
    }
  }
  else if (z>x && z>y){
    if (x>y)
    {
      console.log(z,x,y);
    }
    else//y<zS
    {
      console.log(z,y,x);
    }
  }        





  

  array=[x,y,z];

  for (let i = 0; i < array.length; i++) { 
    for (let j = 0; j < (array.length - i - 1); j++) { 
        if (array[j] < array[j + 1]) { 
            let temporaneo = array[j] 
            array[j] = array[j + 1] 
            array[j + 1] = temporaneo
        } 
    } 
  } 
  console.log(array); 
}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
{
  let x="miao";
  typeof(x) == "number" ? console.log("è un numero") : console.log("non è un numero, ma :", typeof(x))
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

{
  let x = 5;
  x % 2 == 0 ? console.log(x ,"è pari") : console.log( x, "è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
{
  let val = 8
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      //entrabe false
      console.log("Uguale a 10 o maggiore");
    }
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";

console.log("aggiungo Toronto", me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log("tolgo lastName", me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

// lascia il buco
me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

{
  let array = [];
  for(var i = 1; i <= 10; i++){
    
    array.push(i);
    // array[i] += array[i]; che mi è saltato in testa?
  }
  console.log(array);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array.pop();
array.push(100);
// array.splice( array.length-1, 1, 100);

console.log(array);
}