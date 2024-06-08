if (window.SimpleAnime) {
  new SimpleAnime();
}

document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll("botao-introducao");

function removerHoverStyle(e) {
  e.target.style.backgroundColor = '';
  e.target.style.padding = '';
  e.target.style.fontSize = ''; 
}

botoes.forEach(function(botao) {
  botao.addEventListener("mouseover", removerHoverStyle);
});
});
