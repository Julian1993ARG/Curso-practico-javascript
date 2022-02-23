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

let resultadotriangulo3 = document.getElementById("resultadotriangulo3");

function calcularAlturaTrianguloIsoseles(){
    if (lado1.value != lado2.value){
        alert("Los lados deben tener la misma medida para que el triangulo sea isoseles")
    }
    else{
        let res = lado1.value**2 - (lado2.value**2/4);
        res =Math.sqrt(res)
        resultadotriangulo3.innerHTML = res + " Altura"
    }
}

//Triangulo fin

//Circulo 
let resultadocirculo = document.getElementById("resultadocirculo");
let radio = document.getElementById("radio");

function calcularDiametroCirculo(){
    let res = radio.value * 2;
    return resultadocirculo.innerHTML = res + "m²" + " diametro"
}
function calcularPerimetroCirculo(){
    let res = radio.value * Math.PI;
    return resultadocirculo.innerHTML = res + " Perimetro";
}
function calcularAreaoCirculo(){
    let res = Math.PI * radio.value**2;
    return resultadocirculo.innerHTML = res + " Area";
}
//Circulo fin

