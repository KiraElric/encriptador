const regExp = new RegExp('([a-z])', 'g');
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function removerElemento(elemento){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.style.display = "none";
}

function insertarElemento(elemento){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.style.display = "block";
}

function condicionesIniciales(){
    asignarTextoElemento("#titulo-mensaje", "Ningún mensaje fue encontrado");
    asignarTextoElemento("#visualizar_texto", "Ingresa el texto que desees encriptar o desencriptar");
    removerElemento("#copiar");
}

function limpiarInput(){
    return document.querySelector("#textoIngresado").value = "";
}

function validacionTexto(input){
    if(regExp.test(input)){
        return true;
    }else{
        alert("El mensaje no debe contener números o caracteres especiales")
        return false;
    }
}

function resultOperation(){
    removerElemento("#imagen-muñeco");
    removerElemento("#titulo-mensaje");
    insertarElemento("#copiar");
    limpiarInput();
}

function encriptarTexto(){
    const input = document.getElementById("textoIngresado").value;
    
    if(validacionTexto(input)){
        let phrases = (input.toLowerCase()).split("");
        for(let i=0; i<phrases.length; i++){
            if(phrases[i] == "a"){
                phrases[i] = "ai";
            }
            else if(phrases[i] == "e"){
                phrases[i] = "enter";
            }
            else if(phrases[i] == "i"){
                phrases[i] = "imas";
            }
            else if(phrases[i] == "o"){
                phrases[i] = "ober";
            }
            else if(phrases[i] == "u"){
                phrases[i] = "ufat";
            }
        }
        let phraseEncripted = document.getElementById("visualizar_texto");
        phraseEncripted.innerHTML = phrases.join("");
        resultOperation();
    }
}

function desencriptarTexto(){
    const input = document.getElementById("textoIngresado").value;
    if(validacionTexto(input)){
        let phrases = (input.toLowerCase()).split(" ");
        for(let i=0; i<phrases.length; i++){
            if(phrases[i].includes("ai")){
                phrases[i] = phrases[i].replaceAll("ai","a");
            }
            if(phrases[i].includes("enter")){
                phrases[i] = phrases[i].replaceAll("enter","e");
            }
            if(phrases[i].includes("imas")){
                phrases[i] = phrases[i].replaceAll("imas","i");
            }
            if(phrases[i].includes("ober")){
                phrases[i] = phrases[i].replaceAll("ober","o");
            }
            if(phrases[i].includes("ufat")){
                phrases[i] = phrases[i].replaceAll("ufat","u");
            }
        }
        let phraseDesencripted = document.getElementById("visualizar_texto");
        phraseDesencripted.innerHTML = phrases.join(" ");
        resultOperation();
    }
}
function copiarTexto(){
    let texto = document.getElementById("visualizar_texto").innerHTML;
    navigator.clipboard.writeText(texto);
}

condicionesIniciales();