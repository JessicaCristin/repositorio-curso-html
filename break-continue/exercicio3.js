//divisivel por 3 retorna fizz
//divisel por 5 retorna buzz
//divisivel por 3 e 5 retorna fizzBuzz
//numero não divisivel por 3 e 5 retorna o próprio número
//chegar se realmente é um numero


function FizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if ((numero % 3 === 0) && (numero % 5 === 0)) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}


for(let i = 0; i <= 100; i++){
    console.log(i,FizzBuzz(i));
}


