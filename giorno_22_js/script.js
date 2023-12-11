class Pet{
    constructor(petName, ownerName, species,breed){
        this.petName=petName;
        this.ownerName=ownerName;
        this.species=species;
        this.breed=breed;
    }
    sameOwner(pet){
        if(pet.ownerName === this.ownerName){
            return console.log(this.ownerName + " è lo stesso padrone di " + this.petName);
        }
    }
}

let btn = document.querySelector("#input");
console.log(btn);

btn.addEventListener("click", ()=>{
    // devo capire bene perché non posso accedere a value direttamente nel query selector
    let tutto = document.querySelectorAll("input");
    console.log(tutto);
    tutto.forEach(element => {
            console.log(element.value);
    })
    
})

async function poke(){
    let risultato = await fetch("https://pokeapi.co/api/v2/pokemon/ditto",{
	//opzioni (se assenti è un normale GET)
	method: "GET" // post, get, delete, ecc…
	/headers: [oggetto JS],
    // body: JSON.stringify
    });
    return risultato;
}


if (risultato.ok) {
	console.log(await risultato.json());
}
