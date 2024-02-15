let key ="JudwfA0cNHobeB0iTH1vjq35uLTXplh3FsdHiPOYvHsy6lPc3UMQQYnZ";

let load = document.querySelector(".load");
console.log(load)
let immages = document.querySelectorAll("img");
let ids = document.querySelectorAll(".ids");
console.log(ids)
let body = document.querySelector("body");

let btnSearch = document.querySelector(".search");
console.log(immages)

let title = document.querySelectorAll(".card-title");
let arr = [];

load.addEventListener("click", ()=>{
    console.log("load")

    fetch("https://api.pexels.com/v1/search/?page=1&per_page=2&query=cat",
        {               
            method: "GET",
            headers: {
                Authorization: key,
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);


            json.photos.forEach((element, i)=> {
                immages[i].src = element.src.small;
                ids[i].innerText = element.id;
            });

            sessionStorage.setItem("cat", JSON.stringify(json));
            // uguale a console.log(json)
            console.log(JSON.parse(sessionStorage.getItem("cat")))
            // equivalente for classico

            // for(let i=0; i<immages.length; i++){
            //     immages[i].src = json.photos[i].src.small;
            //     console.log(json.photos[i].id)
            //     console.log(ids[i].innerText)
            //     ids[i].innerHTML = json.photos[i].id;
            // }        
        })
        .catch(err => console.log(err));

})
document.addEventListener("DOMContentLoaded", (e)=>{
    body.addEventListener("click", (e)=>{
        e.preventDefault();
        // vorrei trovare un modo per non mettere tutta la classe
        if(e.target.className === "btn btn-sm btn-outline-secondary hide"){
            console.log(e.target.parentNode.parentNode);
            e.target.closest(".col-md-4").remove();
        }           
        if(e.target.className === "link" || e.target.className === "card-title"){
            console.log(e.target.className);
            //let id = e.taget.
            //window.location.assign("./details.html?picId=" + id);


            let obj = JSON.parse( sessionStorage.getItem("immages"));
            console.log( obj.photos[0].photographer_id );
            // if(immages === )
        }           
    });
})

//non mi piace granché
btnSearch.addEventListener("click", ()=>{
    let input = document.querySelector(".form-control").value;
    console.log(input)
    fetch(`https://api.pexels.com/v1/search/?page=1&per_page=2&query=${input}`,
        {               
            method: "GET",
            headers: {
                Authorization: key,
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);

            // francamente non vorrei salvare nello session storage ma non trovo altro modo
            sessionStorage.setItem("immages", JSON.stringify(json));
            
            displayImg(json);
            
        })
        .catch(err => console.log(err))
})

function displayImg(json){
    json.photos.forEach((element, i)=> {
        immages[i].src = element.src.small;
        ids[i].innerText = element.id;
    });
}