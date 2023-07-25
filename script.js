async function buscaEndereco(cep){
    try{
        var consultaCEP = await fetch(`https:viacep.com.br/ws/${cep}/json/`);    
        var consultaCEPConvetida = await consultaCEP.json();
        if(consultaCEPConvetida.erro){
            throw Error('CEP não existente');
        }
        console.log(buscaEndereco)
        return consultaCEPConvetida
    } catch (erro) {
        console.log(erro)
    }
}


