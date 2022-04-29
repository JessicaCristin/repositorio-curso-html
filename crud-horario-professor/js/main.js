
/* function zeroAesquerda(num) {
    return num >= 10 ? num : `0${num}`;
} */

const h1 = document.querySelector('.container h1');
const data = new Date();;

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes, {dataStyle:'full', TimeRanges: 'full'});