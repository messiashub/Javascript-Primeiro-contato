
// Operador Spread = espalhar

let numeros = [1,2,3,4,5];

let outros = [...numeros,6,7,8,9,10];

console.log(outros);

let info={
    nome:'Claudinei',
    sobrenome:'Messias',
    idade:54
}

let novaInfo ={
    ...info,
    cidade:'São Paulo',
    Estado:'SP',
    telefone:1195478974,

}

console.log(novaInfo);

function adicionarInfo(info){
    let novasInfo ={
        ...info,
        cep:0000026,
        rua:"bento teixeira"
    }
    return novasInfo

}

console.log(adicionarInfo({nome:'Rose',sobrenome:'Cavalcante'}));

// spread ... -> expandir, espalhar conteúdo de um array

// Exemplo 1

// Sem spread

let meio = [3,4];

let array = [1,2, meio,5,6];
console.log(array);

// Com spread

let midle = [3,4];
let arry =[1,2,...midle,5,6]

console.log(arry);

// Copiando um array com spread ...

let nomes =['rose','claudinei','milson']

let nomesCopy = [...nomes];

console.log(nomesCopy);

// Concatenando array com spread

// Modo normal -> concat

let nameM = ['Milson','Marcela','Marcia'];
let nameC = ['Claudio','Claudinei','Claudia'];

let arrMC = nameM.concat(nameC);

console.log(arrMC);

// Modo spread

let arrMC1 = [...nameM,...nameC];
console.log(arrMC1);