import validaCPF from '../valida/validaCPF.js';
import {cadastrarClientes} from '../../api/cliente.js'

const formCadastroCliente = document.querySelector("[data-form]")

const eventoEnvia = (form) => {
    formCadastroCliente.addEventListener("submit",
    event => { 
        event.preventDefault()

            const nome = event.target.querySelector("[data-nome]").value
            const cpf = event.target.querySelector("[data-cpf]").value

                if(validaCPF(cpf)){
                    cadastrarClientes(nome, cpf)
                } else { 
                    alert('O CPF não é válido')
                }
           
        
        
        }
    )
}

export default eventoEnvia;


