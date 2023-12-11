let key ="JudwfA0cNHobeB0iTH1vjq35uLTXplh3FsdHiPOYvHsy6lPc3UMQQYnZ";


// async function func() {
//     let arr = [];
//     await fetch("https://api.pexels.com/v1/search?query=cat",
//         {               
//             method: "GET",
//             headers: {
//                 Authorization: "JudwfA0cNHobeB0iTH1vjq35uLTXplh3FsdHiPOYvHsy6lPc3UMQQYnZ",
//             }
//         })
//         .then(response => response.json())
//         .then(json => console.log(json))
//         .catch(err => console.log(err))
//     console.log(arr)
// }



let load = document.querySelector(".load");
console.log(load)
let immages = document.querySelectorAll("img");
let ids = document.querySelectorAll(".ids");
console.log(ids)
let body = document.querySelector("body");

let btnSearch = document.querySelector(".search");
console.log(immages)

load.addEventListener("click", ()=>{
    console.log("load")

    fetch("https://api.pexels.com/v1/search/?page=1&per_page=12&query=cat",
        {               
            method: "GET",
            headers: {
                Authorization: key,
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);

            // json.photos.forEach(element => {
            //     console.log(immages.attributes.src.value)
            //     immages.attributes.src.value = element.src.small

            //     immages.forEach(x =>{
            //         x.src = element.src.small
            //     })
            //     immages[0].src = element.src.small

            //     // console.log("src?")
            //     // console.log(immages.src)
            //     // console.log(element.src.small)
            // });
            // immages.forEach(x =>{
            //     x.src = json.photos.src.small
            // })

            // voio divessoooo
            for(let i=0; i<immages.length; i++){
                immages[i].src = json.photos[i].src.small;
                console.log(json.photos[i].id)
                console.log(ids[i].innerText)
                ids[i].innerHTML = json.photos[i].id;
            }
           

        })
        .catch(err => console.log(err))

        
})
document.addEventListener("DOMContentLoaded", (e)=>{
    body.addEventListener("click", (e)=>{
                e.preventDefault();
                // vorrei trovare un modo per non mettere tutta la classe
                if(e.target.className === "btn btn-sm btn-outline-secondary hide"){
                    console.log(e.target.parentNode.parentNode);
                    e.target.closest(".card").remove();
                }       
            });
})

//non mi piace granché
btnSearch.addEventListener("click", ()=>{
    let input = document.querySelector(".form-control").value;
    console.log(input)
    fetch(`https://api.pexels.com/v1/search?query=${input}`,
        {               
            method: "GET",
            headers: {
                Authorization: key,
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            for(let i=0; i<immages.length; i++){
                immages[i].src = json.photos[i].src.small;
                console.log(json.photos[i].id)
                console.log(ids[i].innerText)
                ids[i].innerHTML = json.photos[i].id;
            }
        })
        .catch(err => console.log(err))
})