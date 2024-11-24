// function calcula() {
//     var peso = parseFloat(document.getElementById("peso").value);
//     var altura = parseFloat(document.getElementById("altura").value);

//     // Verifique se a altura foi inserida em centímetros, caso contrário, converta para metros
//     // Se a altura for inserida em centímetros (ex: 180), divide por 100
//     if (altura > 10 && altura < 300) {
//         altura = altura / 100;  // Converte para metros, caso a altura tenha sido dada em cm
//     }

//     var IMC = peso / (altura * altura);

//     // Exibe o resultado com base no IMC calculado
//     if (IMC < 20) {
//         document.getElementById("resultado").innerHTML = "Seu IMC é: " + IMC.toFixed(2) + ", portanto você está abaixo do peso";
//     } else if (IMC >= 20 && IMC <= 25) {
//         document.getElementById("resultado").innerHTML = "Seu IMC é: " + IMC.toFixed(2) + ", portanto você está no peso ideal";
//     } else if (IMC > 25 && IMC <= 30) {
//         document.getElementById("resultado").innerHTML = "Seu IMC é: " + IMC.toFixed(2) + ", portanto você está com sobrepeso";
//     } else {
//         document.getElementById("resultado").innerHTML = "Seu IMC é: " + IMC.toFixed(2) + ", portanto você está com obesidade";
//     }
// }


function calcularIMC() {

    var formulario = document.getElementById("formulario");

    var kilos = +formulario.kilos.value;
    var metros = +formulario.metros.value;
    var centimetros = +formulario.centimetros.value;

    var altura = (metros * 100 + centimetros)/100;
    var imc = kilos / (altura * altura );
    
    formulario.imc.value = imc.toFixed(2);
}