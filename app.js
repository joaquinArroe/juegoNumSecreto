let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUuuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}.`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor")
        }else{
            asignarTextoElemento("p","El número secreto es mayor")
        }
        intentos++;
        limiparCaja();
    }
    return;
}


function limiparCaja(){
    document.querySelector('#valorUuuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Se sortearon todos los números posibles")
    }else{
        console.log(numeroGenerado)
        console.log(listaNumerosSorteados)
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }
}

function condicionesInciales(){
    asignarTextoElemento("h1", "Juego Numero Secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limiparCaja();
    condicionesInciales();
    document.querySelector('#reiniciar').setAttribute("disabled", "true");
}


condicionesInciales();