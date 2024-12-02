$(document).ready(function() {

    // Quando o botão "Adicionar Item" for clicado
    $('#adicionar').click(function() {
        
        // Pega o texto do campo de input
        var texto = $('#item').val().trim(); // O trim() remove espaços extras no começo e no final
        var prioridade = $('#prioridade').val(); // Pega o valor da prioridade (alta ou baixa)
        
        // Se o campo de texto não estiver vazio
        if (texto !== "") {
            
            // Cria um novo item de lista com o texto
            var item = $('<li>').text(texto);

            // Se a prioridade for "alta", coloca o item no topo da lista
            if (prioridade === "alta") {
                $('#lista').prepend(item);  // prepend() coloca no início
            } else {
                $('#lista').append(item);   // append() coloca no final
            }

            // Cria um botão para remover o item
            var botao = $('<button>').text('Remover').click(function() {
                $(this).parent().remove();  // Remove o item da lista
                atualizarContador();        // Atualiza a quantidade de itens
            });

            // Adiciona o botão de remover ao item
            item.append(botao);

            // Limpa o campo de texto
            $('#item').val('');

            // Atualiza o contador de itens na lista
            atualizarContador();
        } else {
            // Se o campo de texto estiver vazio, mostra uma mensagem
            alert('Digite um item!');
        }
    });

    // Quando qualquer item da lista for clicado, marca como comprado (verde)
    $('#lista').on('click', 'li', function() {
        $(this).toggleClass('comprado');  // Adiciona ou remove a classe "comprado"
    });

    // Quando o botão "Limpar Lista" for clicado
    $('#limpar').click(function() {
        $('#lista').empty();  // Remove todos os itens da lista
        atualizarContador();  // Atualiza o contador de itens
    });

    // Função para atualizar a quantidade de itens
    function atualizarContador() {
        var quantidade = $('#lista li').length;  // Conta os itens da lista
        $('#contador').text(quantidade);  // Atualiza o contador no HTML
    }

});
