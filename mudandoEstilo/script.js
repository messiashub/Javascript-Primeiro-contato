
let titulo = document.querySelector('#titulo');
let azul = document.querySelector('.azul1');
let vermelho = document.querySelector('.vermelho2');
let verde = document.querySelector('.verde3');


azul.addEventListener('click',function(){
    /* titulo.classList.remove('vermelho','verde'); */
    limpar();
    titulo.classList.add('azul');
    
});
vermelho.addEventListener('click', function(){
    limpar();
    titulo.classList.add('vermelho');   
});

verde.addEventListener('click',function(){
    limpar();
    titulo.classList.add('verde');
})

function limpar(){
    titulo.classList.remove('azul','vermelho','verde');
}