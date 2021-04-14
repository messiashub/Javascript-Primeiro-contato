
let soma = document.querySelector('.soma');
let multiplica = document.querySelector('.multiplica');

soma.addEventListener('click',()=>{
    let n1 = Number(document.querySelector('#numero1').value);
    let n2 = Number(document.querySelector('#numero2').value);
    res = n1 + n2;
    document.querySelector('#resultado').innerHTML= res;
    
    
    /* alert('Olá'); */
});

multiplica.addEventListener('click',()=>{
    let n1 = Number(document.querySelector('#numero1').value);
    let n2 = Number(document.querySelector('#numero2').value);
    res = n1 * n2;
    document.querySelector('#resultado').innerHTML= res;
    /* alert('Olá de novo'); */
})
