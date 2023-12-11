fetch("URl",{
    method: "POST",
    body: JSON.stringify(obj), //oggetto da inviare al server
    headers: {
        "content-type": "application/json", //tipo di contenuto da inviare
        Authorization: "chiave"
    }
}
).then(response=> response.json())
.then(json=> {
    console.log(json)
    //createList(json);
})
.catch(error => console.log(error))


// ----------------------------------
fetch("URl",{                //nell'URL probabilmente ci sarà un id dell'oggetto
    method: "PUT",
    body: JSON.stringify(modifiedObj), //oggetto modificato
    headers: {
        "content-type": "application/json" //tipo di contenuto da inviare
    }
})
//-----------------------------------
fetch("URl",{                //nell'URL probabilmente ci sarà un id dell'oggetto da cancellare
    method: "DELETE"
    }
)

//---------------------------
async function func(){
    let arr = [];
    await fetch("URL")
    .then(response => response.json())
    .then(json => {
        arr = json;
        console.log(json)
    })
    console.log(arr); // senza async e await arr sarebbe vuoto perché fetch è asincrono
}