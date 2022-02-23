// Cuadrado
let resultadoCuadrado = document.getElementById("resultadoCuadrado")
let user = document.getElementById("InputCuadrado");

function calcularPerimetroCuadrado(){
   return resultadoCuadrado.innerHTML = user.value * 4 + "cm";
}

function calcularAreaCuadrado(){
    return resultadoCuadrado.innerHTML = (user.value * user.value) + "m²";
}
//Cuadrado fin

//Triangulo

let lado1 = document.getElementById("lado1");
let lado2 = document.getElementById("lado2"); 
let base = document.getElementById("base");
let resultadotriangulo1 = document.getElementById("resultadotriangulo1");

function calcularPerimetroTriangulo(){
    let res = Number(lado1.value) + Number(lado2.value) + Number(base.value);
    return resultadotriangulo1.innerHTML = res + "cm";
}

let base2 = document.getElementById("base2"); 
let altura = document.getElementById("altura"); 
let resultadotriangulo2 = document.getElementById("resultadotriangulo2");

function calcularAreaTriangulo(){
    return resultadotriangulo2.innerHTML = (base2.value * altura.value)/2 + "m²"
}
//Triangulo fin

//Circulo 

//Circulo fin

