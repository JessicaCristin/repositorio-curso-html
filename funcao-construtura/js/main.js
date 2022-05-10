// função construtora -> objtos
// função fabrica -> objetos

function Pessoa(nome, sobrenome) {
    
    //atributos ou métodos privados
    const id = 1234;
    //atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    const metodoInterno = function () {

    };

    this.metodo = function () {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p2.nome);
p2.metodo();