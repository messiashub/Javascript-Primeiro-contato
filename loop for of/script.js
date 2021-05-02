
// FOR OF -> O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

/* sintaxe
for (variable of iterable) {
    // code block to be executed
  }
*/

let numeros = [100, 99, 89];

for(let numero of numeros){
    let dobro = numero * 2
    
    console.log(dobro);
}
//onsole.log(numero);


let nome = 'Claudinei'

for(let n of nome){
    let upper = n.toUpperCase()
    console.log(upper);
}