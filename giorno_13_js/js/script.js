// crea programmaticamente, utilizzando JS, un tabellone per la tombola formato da 76 celle, numerate con i numeri da 1 a  76
let tabella = document.querySelector("#tabella");
// let cella = document.createElement("div");
const button = document.querySelector("#extract");
for(let i=1; i <=76; i++){
    
    let cella = document.createElement("div");
    cella.className = `cel_${[i]}`;
    cella.innerText = i;
    tabella.appendChild(cella);

    
  
}
console.log(tabella.childNodes[1].innerText)
console.log(typeof tabella.childNodes[1])

// tabella.childNodes.find(); childNodes is not a function...???
// vorrei usare find() per risparmiare calcoli, visto che si dovrebbe fermare al primo risultato

// Crea un bottone per simulare l'estrazione di un numero: dovrà selezionare un numero da 1 a 76

// dopo il click del bottone, evidenzia in qualche modo la cella corrispondente sul tabellone (quello con lo stesso numero) , ad esempio cambiandone il colore di sfondo

button.addEventListener("click", function(){
    let rand = Math.round(Math.random()*76);
    tabella.childNodes.forEach(x => x.innerText == rand ? x.style.backgroundColor = "#ddd" : console.log(rand));
    return rand;
});
console.log(rand)


// mantieni evidezniate le celle corrispondenti ai numeri precedentemente estratti dopo ogni estrazione

// Externa:
// Fai in modo che non sia possibile richiamare un numero già precedentemente estratto

// in aggiunta al tabellone, crea per il giocatore una tabellina da 24 celle, con i numeri random da 1 a 76 che si comporterà come il tabellone principale (evidenziando i numeri estratti)

// permetti all'utente di selezionare il  numero di tabelline con le quali intende giocare, e generarle a schermo prima dell'inizio della partita