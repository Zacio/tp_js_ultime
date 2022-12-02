//exo 1
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let age = document.getElementById("age");
//exo 2
let infoList = document.getElementById("listeDInfo")

function getValueInfo(){
    //exo1
    let info = [];
    info.push(nom.value)
    info.push(prenom.value)
    info.push(age.value)
    console.log(info)
    //exo2
    creaList(info)
}


function creaList(Infovalue){
    let liste = document.createElement("li");
    liste.innerHTML = Infovalue;
    infoList.appendChild(liste);
}

//exo4
function suppr(){
    console.log(infoList.childNodes[1].innerHTML)
    while(infoList.childNodes.length > 1){
        infoList.lastChild.remove()
    }
    console.log(infoList.childNodes)
}

//exo5
function trie(){

    let trier = [];
    for(let i = 1; i < infoList.childNodes.length; i++){
        trier.push(infoList.childNodes[i].innerHTML)
    }
    trier.sort()
    console.log(trier)
    suppr();
    for(let i = 0; i < trier.length; i++){
        creaList(trier[i])
    }
}