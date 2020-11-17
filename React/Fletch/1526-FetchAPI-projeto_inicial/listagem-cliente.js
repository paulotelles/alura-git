



const conteudoTabela = document.querySelector("[data-conteudo-tabela]");

const removeCliente = id => {
    if(confirm("Deseja deletar o cliente?")){
        deletarClientes(id);
        document.location.reload();
    }
}

const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr');

    const conteudoLinha = `
        <tr>
                <td>${cpf}</td>
                <td>${nome}</td>
                <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
                <a href="edita-clientes.html?id=${id}"><button type="button" class="btn btn-info">Editar</button></a>
        </tr>
        `;
    
        linha.innerHTML = conteudoLinha;
        return linha;
    
}

listarClientes().then(exibe => {
    exibe.forEach(index => {
        conteudoTabela.appendChild(exibeCliente(index.cpf, index.nome, index.id));
    })
});


console.log(conteudoTabela);
