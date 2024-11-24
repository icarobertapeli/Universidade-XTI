    $("#criarInputs").click(function () {
        var quantidade = $("#numInputs").val();
        $("#inputsContainer").empty();
        if (quantidade > 0) {
            for (var i = 0; i < quantidade; i++) {
                $("#inputsContainer").append('<input type="text" placeholder="Input ' + (i + 1) + '" />');
            }
        } else {
            alert("Por favor, insira um número válido maior que zero.");
        }
    });
