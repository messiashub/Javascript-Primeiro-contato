

function subirTela(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
    
}

function aparecerBotao(){
    if(window.scrollY === 0){
       document.querySelector('.botaoScroll').style.display='none';
    }
    else{
        document.querySelector('.botaoScroll').style.display='block';
    }
}

window.addEventListener('scroll', aparecerBotao)