const pegaUrl = new URL(window.location);

const id = pegaUrl.searchParams.get('id');

inputCPF = document.querySelector('[data-cpf]');
inputNome = document.querySelector('[data-nome]');

detalhaCliente(id).then(dados =>{
    inputCPF.value = dados[0].cpf;
    inputNome.value = dados[0].nome;
})