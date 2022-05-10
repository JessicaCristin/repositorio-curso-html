const pessoas = [
    { nome: 'Jessica', idade: 21 },
    { nome: 'Maria', idade: 29 },
    { nome: 'Joao', idade: 50 }
];

const pessoaMenorDe50 = pessoas.filter(obj => obj.idade < 50);
const pessoaComNomeJ = pessoas.filter(obj => obj.nome.toLowerCase().startsWith('j'));

console.log(pessoaMenorDe50);
console.log(pessoaComNomeJ);