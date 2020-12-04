import inicializaTabela from "./componentes/lista/listagem-cliente.js";
import inicializaFormEdicao from "./componentes/edita/form-edicao.js"
import inicializaCadastro from "./componentes/cadastro/componente-cadastro.js"


const rotas = {
    "/": inicializaTabela,
    "/edita": inicializaFormEdicao,
    "/cadastro": inicializaCadastro,

}

const rootDiv = document.querySelector('[data-container]');

const navegacao = pathname => {
    window.history.pushState({}, pathname, window.location.origin + pathname);

    rootDiv.innerHTML = "";
    const iniciarRota = rotas[window.location.pathname];

    rootDiv.appendChild(iniciarRota());
}
window.navegacao = navegacao;

window.onpopstate = () => {
    rootDiv.innerHTML = "";
    rootDiv.appendChild(rotas[window.location.pathname]());
}
export {navegacao}