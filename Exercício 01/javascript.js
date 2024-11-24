function calcula (){
    var valor1 = $("#valor1").val() * 1;
    var valor2 = $("#valor2").val() * 1;
    var soma = valor1 + valor2;

    $("#resultado").html(soma);

    console.log (soma);

}