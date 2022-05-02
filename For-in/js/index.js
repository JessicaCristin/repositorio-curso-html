/*
//For in -> lê os indices ou chaves do objeto
const frutas = ['pera', 'maçã', 'uva'];

for(let indice in frutas){
    console.log(indice);
}


for(let indice in frutas){
    console.log(frutas[indice]);
} */

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

for (let chave in  pessoa ){
    console.log(chave, pessoa[chave]);
}

