// let titolo = document.querySelector(".card-title");
// let immagine = document.querySelector(".card-img-top");
// let categoria = document.querySelector(".film-category");
// let prezzo = document.querySelector(".prezzo");
let bookList = document.querySelector(".bookList");
catalogo = [];
console.log(bookList)
// richiesta al server
let xhr = new XMLHttpRequest();

//definisco il metodo della chiamate e l'url
// --redayState = 0
xhr.open("GET", "https://striveschool-api.herokuapp.com/books");
//eseguo la chiamata
// --readyState = 2
xhr.send("")
//aspetto i cambiamenti di stato
// --readyState = 3 (download/load)
// --readState = 4 (done)
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200){
        console.log("operazione complatata");
        let json = xhr.responseText;
        let obj = JSON.parse(json);
        console.log(obj);
        //salvo il conenuto in un array
        catalogo = obj;
        // -----------------QUI lavoro---------------------
        displayIteams(obj)
    }
}
// aspetta il caricamento del DOM
// document.addEventListener("DOMContentLoaded", ()=>{
//     document.querySelector()
// })
// veccchio metodo equivalente 
// window.onload()
// console.log(obj[0].title)

//funzione per ciclare gli oggetti parsati e generare card HTML
function displayIteams(obj){

    //bookList.innerHTML = "";
    obj.forEach(book => {
        
        console.log("dentro?");
        bookList.innerHTML += `
        <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${book.img}" alt="Card image cap">
              <div class="card-body">
                  <h5 class="card-title">${book.title}</h5>
                  <p class="card-text film-category">${book.category}</p>
                  <p class="card-text">Prezzo: <span class="prezzo">${book.price}</span>$</p>
                  <a href="#" class="btn btn-primary">Acquista</a>
                  <a href="#" class="btn btn-danger">Scarta</a>
              </div>
        </div>`;
    
        // let element = document.createElement('div');       
        // element.innerHTML += card;
        // bookList.appendChild(element);
    
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
        bookList.addEventListener("click", (e)=>{
            //prevenire il comportamento di default evita di tornare in alto nella pagina quando cancello un elemento
            //poiché DOMContentLoaded...non lo so...
            e.preventDefault();
            if(e.target.className === "btn btn-danger"){
                console.log(e.target.parentNode.parentNode);
                // entambi uguali, closest direi migliore
                //e.target.parentNode.parentNode.remove();
                e.target.closest(".card").remove();
            }
            if(e.target.className === "btn btn-primary"){
                console.log(e.target.parentNode.parentNode);
                localStorage.setItem("carrello", this.target.parentNode);
            }
        }); 
})