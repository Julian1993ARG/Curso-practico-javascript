// Cuadrado
let resultadoCuadrado = document.getElementById("resultadoCuadrado")
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado
}

const user = document.getElementById("InputCuadrado")

function calcularPerimetroCuadrado(){
   return resultadoCuadrado.innerHTML = perimetroCuadrado(user.value) + "cm";
}

function calcularAreaCuadrado(){
    return resultadoCuadrado.innerHTML = areaCuadrado(user.value) + "m²";
}

//Cuadrado fin