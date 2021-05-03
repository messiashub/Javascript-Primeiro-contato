
// FOR OF -> O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

/* sintaxe
for (variable of iterable) {
    // code block to be executed
  }
*/
let notas = [10,35,80,95,100,5,66,77,15];
let aprovado = 0;
let reprovado = 0;

for(let nota of notas){
    if(nota >= 50){                   // se nota for maior que 50 , aprovado recebe + 1
        aprovado++
    }else{                            // se não , reprovado recebe + 1 
        reprovado++
    }  
}
console.log(`aprovados: ${aprovado}`);
console.log(`aprovados: ${reprovado}`);
//////////////////////////////
let numeros = [100, 99, 89];

for(let numero of numeros){ 
    let dobro = numero * 2    // iterando sobre os valores e multiplicando por 2
    
    console.log(dobro);
}
///////////////////////////
let nome = 'Claudinei'

for(let n of nome){
    let upper = n.toUpperCase()  // iterando sobre string e  aplicando caixaAlta
    console.log(upper);
}