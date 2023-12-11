let salva = document.querySelector("#salva");
let cancella = document.querySelector("#cancella");
let nome = document.querySelector("input");

console.log(localStorage);
console.log(Object.values(localStorage));

let i = 0;
salva.addEventListener("click", ()=>{
    
    if(Object.values(localStorage).includes(nome.value)){
        console.log("c'è già");
    }else{
        localStorage.setItem("user"+i, nome.value);
        i++;
    }
})

cancella.addEventListener("click", ()=>{
    console.log(localStorage.getItem("user"));
    localStorage.removeItem("user");

})


let attuale = sessionStorage.getItem("count");
setInterval(function(){
    localStorage.setItem("count", i++);
    sessionStorage.setItem("count", attuale++);
},1000);

// sessionStorage.setItem(c);
// setInterval(function () {
//     c++;
// }, 1000);




// Object.values(localStorage).forEach(x=>{
//     if(localStorage.getItem("user") === x){
//         console.log("già messo");
//     }
// })

//setta newValue se è presente(true) allora lo setta come number
let newValue = (tempo ? parseInt(tempo,10) : 0)+1
//
function scorrere() {
    let timer = document.querySelector(".timer")
    // let tempo = 0;
    let tempo = sessionStorage.getItem("tempo")

    let newValue = (tempo ? parseInt(tempo,10) : 0)+1
    sessionStorage.setItem('tempo', newValue)
    timer.innerText = tempo
}
setInterval(scorrere, 1000)

console.log("hello")



// ------------------EPICODE----------------------
// let i = sessionStorage.getItem('count')
//         ? parseInt(sessionStorage.getItem('count'))
//         : 0

//       const conta = function () {
//         i = i + 1
//         document.getElementById('timer').innerText =
//           i + ' secondi di sessione aperta'
//         sessionStorage.setItem('count', i)
//       }

//       setInterval(conta, 1000)