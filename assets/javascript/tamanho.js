// script.js

function ajustarClasseComBaseNaTela() {
    if (window.innerWidth > 1000) { // Exemplo de largura máxima de 768 pixels
        document.querySelector('header').classList.add('content-sup');
        document.querySelector('body').classList.add('content-sup');
        
    } else {
        document.querySelector('header').classList.remove('content-sup');
        document.querySelector('body').classList.remove('content-sup');
    }
}

// Adiciona um ouvinte de evento de redimensionamento da janela
window.addEventListener('resize', function() {
    ajustarClasseComBaseNaTela();
});
