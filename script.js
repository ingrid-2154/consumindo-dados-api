async function buscaEndereco(cep) {
    try {
        var consultaCEP = await fetch(`https:viacep.com.br/ws/${cep}/json/`);    
        var consultaCEPConvetida = await consultaCEP.json();
        if (consultaCEPConvetida.erro) {
            throw Error('CEP não existente!');
        }
        console.log(consultaCEPConvetida);
        return consultaCEPConvetida;
    } catch (erro) {
        console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));