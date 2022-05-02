function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de date.');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {

    });
}

try{
    const data = new Date ('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
}catch(e){
    //tratar erro
} finally{
    
}

