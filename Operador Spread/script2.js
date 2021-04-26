
// Spread

//let notas = [99, 10, 88, 100, 56,13,45];
//console.log(notas);
//console.log(...notas);  // spread imprime cada elemento do array individualmente, deixando de ser array
//console.log(...notas[2]); // não  é mais um array, impossivel iteragir (modo errado)

// Somando valores com spread
// Ex: 1
//let notas1 = [99,1,50]

//function soma(n1,n2,n3){ // -> função normal
    //return n1 + n2 + n3
//}
//console.log(soma(...notas1)); // 150

// EX: 2 
//let notas2 = [44,1,55];
//let somado = (n1,n2,n3)=> n1 + n2 + n3; //-> arrow function

//console.log(somado(...notas2)); // 100

//const pessoa = [nome='Claudinei', sobrenome='Messias', idade= 46];
//console.log(pessoa);
//console.log(...pessoa);


// Concatenando arrays com spread  - juntando

const n1 = [100,200,300];
const n2 = [400,500,600];
const n3 = [700,800,900];

const concatena = [...n1,...n2,...n3];

console.log(concatena);