
// JASON -> É um objeto javascript usado para fazer comunicação entre requisições, tanto para guardar
//          informações, enviar e receber  informações nessas requisições.

// Criando um JASON   -> Cria-se um variável e coloca um obejto dentro dela!

// Ex :

let pessoa = {    // Objeto com  propriedades e valores
    nome:'Claudinei',
    sobrenome:'Messias',
    idade:49,
    caracteristiscas:['Sofrido','Persistente','Teimoso'], // <- array
    estetica:{                              // <- objeto dentro do objeto
        peso: 47,
        altura:1.74
    }
}
// Acessando  o objeto e seus valores
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.caracteristiscas);
console.log(pessoa.caracteristiscas[1]);
console.log(pessoa.estetica);
console.log(pessoa.estetica.altura);
console.log(pessoa.estetica.peso);