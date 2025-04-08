document.addEventListener('DOMContentLoaded', function() {
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    // Verificando se os botões existem no DOM
    if (aumentaFonteBotao && diminuiFonteBotao) {
        let tamanhoAtualFonte = 1;

        aumentaFonteBotao.addEventListener('click', function() {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        });

        diminuiFonteBotao.addEventListener('click', function() {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        });
    } else {
        console.error('Botões não encontrados no DOM');
    }
});
