
let soma = document.querySelector('.soma');
let multiplica = document.querySelector('.multiplica');
let clear =document.querySelector('.clear');



soma.addEventListener('click',()=>{
    let n1 = Number(document.querySelector('#numero1').value);
    let n2 = Number(document.querySelector('#numero2').value);
    res = n1 + n2;
    document.querySelector('#resultado').innerHTML= res;
   
});

multiplica.addEventListener('click',()=>{
    let n1 = Number(document.querySelector('#numero1').value);
    let n2 = Number(document.querySelector('#numero2').value);
    res = n1 * n2;
    document.querySelector('#resultado').innerHTML= res;
    
});
clear.addEventListener('click',()=>{
    let n1 = document.querySelector('#numero1').value='';
    let n2 = document.querySelector('#numero2').value='';
    document.querySelector('#resultado').innerHTML= '0';
});