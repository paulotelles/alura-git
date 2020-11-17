
const listarClientes = () => {
    
return fetch('http://localhost:4000/clientes')
.then(resposta => {
    return resposta.json();
})
.then(json => json);
}

const cadastrarClientes = (nome, cpf) => {
    return fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            cpf: cpf
        })

    })
    .then(resp => {
        return resp.body;
    });
}

const deletarClientes = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'DELETE'
    })
}

const detalhaCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'GET'
    }).then(resposta => {
        return resposta.json()
    })
}

const editaCliente = (id, nome, cpf) => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            cpf: cpf
        })

    })

}

