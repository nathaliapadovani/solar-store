if (window.SimpleAnime) {
  new SimpleAnime();
}

document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os botões com as classes .botao-introducao e .botao-produtos
  const botoes = document.querySelectorAll(".botao-introducao, .botao-produtos");

function removerHoverStyle(e) {
  console.log('Hover removido do botão:', e.target);
  e.target.style.backgroundColor = '';
  e.target.style.padding = '';
  e.target.style.fontSize = ''; 
}

botoes.forEach(function(botao) {
  botao.addEventListener("mouseover", removerHoverStyle);
});
});
