const elementos = [
    { tag: 'p', texto: 'Qualquer texto.' },
    { tag: 'div', texto: 'frase 2.' },
    { tag: 'section', texto: 'frase 3.' },
    { tag: 'footer', texto: 'frase 4.' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

//desestruturação
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);

/* for(let i = 0; i < elementos.length; i++){
    console.log(elementos[i].tag);
} */

/* 
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
} */