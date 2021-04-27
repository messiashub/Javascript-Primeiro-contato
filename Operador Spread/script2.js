
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

/* const n1 = [100,200,300];
const n2 = [400,500,600];
const n3 = [700,800,900];

const concatena = [...n1,...n2,...n3];

console.log(concatena); */

//////////////////////////////////////////



const cliente = {
    nome: 'Claudinei Messias',
    cpf:'029.345.510.11',
    nascimento: '13/01/1973',
    telefone: '978747608',
    endereço: {
        rua: 'Avenida Javascript',
        cidade: 'São Paulo',
        estado: 'SP',
        pais: 'Brasil',
    }
}

//REST e SPREAD

// Pegar nome do cliente mas não descartar o resto - REST

const {nome,...resto} = cliente;
console.log('nome:',nome);
console.log('resto:', resto);

// ADICIONAR NOVO ATRIBUTO NO OBJETO CLIENTE: 'UPDATE

const cli ={...cliente, update: new Date()};

console.log('cli:', cli);

// ALTERAR O TELEFONE DO CLIENTE PARA '111111111'
const cli2 = {...cliente,telefone:'11111111'}

console.log('cli2:',cli2);

//Função que soma varios valores

function soma(...numeros){
    return numeros.reduce((anterior, proximo)=>{
        return anterior + proximo;
    })  
}
console.log(soma(2,4,10));

// Concatenando arrays - SPREAD

const valores = [4, 1, 2, 3, 4, 5];
const valores2 = [8, 7, 9, 12];

const array =[...valores,...valores2];

console.log(array);

// ADICIONANDO ELEMENTO NO INÍCIO E NO FIM DO ARRAY  - SPREAD

const array2 = [100,...valores, 99];

console.log(array2);

// FUNÇÃO QUE RECEBE UM ARRAY DE VALORES E MULTIPLICA O PRIMEIRO POR OS OUTROS

function  multi([primeiro,...resto]) {
    return resto.map(v => v * primeiro);
};
console.log(multi(valores));