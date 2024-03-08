document.getElementById('tip-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var tip = document.getElementById('tip').value;
    if (tip) {
        // Aqui você pode adicionar a funcionalidade de enviar a dica para um servidor ou mostrá-la na tela.
        alert("Dica enviada: " + tip);
        // Limpar o campo de dica
        document.getElementById('tip').value = '';
    } else {
        // Alertar o usuário se o campo estiver vazio
        alert("Por favor, insira uma dica de jardinagem.");
    }
});