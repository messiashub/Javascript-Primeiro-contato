
// Rest

function adicionar(...nomes){
    console.log(nomes);

}

adicionar('Claudinei','Rose'); // [ 'Claudinei', 'Rose' ]

// Rest com Spread

function addNomes(names, ...newNames){
    let novo =[
        ...names,
        ...newNames
    ];
    return novo;
}
let names = ['Claudinei','Sheila'];

let outros = addNomes(names,'Shayenne','Micaela','Margareth'); // [ 'Claudinei', 'Sheila', 'Shayenne', 'Micaela', 'Margareth' ]

console.log(outros);

// Somando com rest

function somar(...numbers){
    let soma = 0;
    for(let num of numbers){
        soma +=num;
    }
    return soma;
};
console.log(somar(3,5,6));   // 14

/////
function somar2(a,b,...c){
    let resultado = a + b;

    c.forEach(function(n){
        return resultado += n;
    })

    return resultado;
}

console.log(somar2(1,2,3,4));   // 10


