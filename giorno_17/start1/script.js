let flex = document.querySelector("#flex");

tasks =[
    "creare i postit",
    "colorali",
    "affiancali",
    "spaziali",
    "ombreggiali",
    "ruotali",
    "animali",
    "testarli"
]

// task.forEach(x => {
//     document.createElement("div")
// });

let newPost="";
for(let i = 0; i<tasks.length; i++){
    newPost +=  `<div class="post" id="p${i}"><p>Task #${i+1}</p><p>${tasks[i]}</p></div>`;
    flex.innerHTML = newPost;

}
for(let i = 0; i<tasks.length; i++){
    let rDeg = rand(-3, 3);
    let rTran = rand(-10, 10);
   
    document.getElementById(`p${i}`).style.transform = `translate(${rTran}px,${rTran}px) rotate(${rDeg}deg)`;
    //document.getElementById(`p${i}`).style.backgroundColor = "blue";
}
// Trasformazione permanente bisognerebbe aggiungere un evento "mouseleave"
// let hover = document.querySelectorAll(".post");
// hover.forEach(x =>{
//     x.addEventListener("mouseover", ()=>{
//         x.style.transform = "scale(1.2) rotate(0deg)"
//     })
// })

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }