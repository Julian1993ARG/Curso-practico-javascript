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

//Triangulo



let lado1 = document.getElementById("lado1");
let lado2 = document.getElementById("lado2"); 
let base = document.getElementById("base");
let resultadotriangulo1 = document.getElementById("resultadotriangulo1");
let lado1x = Number(lado1.value)
let lado2x = Number(lado2.value)
let basex = Number(base.value)

function perimetrotriangulo(l1,l2,b){
    return l1 + l2 + b;
}
function calcularPerimetroTriangulo(){
    return resultadotriangulo1.innerHTML = perimetrotriangulo(lado1x,lado2x,basex) + "cm";
}

let base2 = document.getElementById("base2"); 
let altura = document.getElementById("altura"); 
let resultadotriangulo2 = document.getElementById("resultadotriangulo2");

function areatriangulo(b,a){
    return (b*a)/2
}
function calcularAreaTriangulo(){
    return resultadotriangulo2.innerHTML = areatriangulo(base2.value, altura.value) + "m²"
}
//Triangulo fin

