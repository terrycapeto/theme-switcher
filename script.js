//Cria uma variavel do elemento ball e body para encurtar a codificação
const ball = document.querySelector('.ball');
const body = document.querySelector('body');

//Adiciona o evendo Click no elemento ball para trocar a class do elemento body
ball.addEventListener('click', function(){
    body.classList.toggle('active')
})