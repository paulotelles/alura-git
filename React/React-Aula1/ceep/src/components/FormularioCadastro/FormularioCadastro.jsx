import React, { Component } from "react"
import "./estilo.css"

class FormularioCadastro extends Component {
  constructor(){
    super();
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
    console.log(this.titulo);
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
    console.log(this.texto);
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    console.log(`Nova nota, titulo: ${this.titulo} texto: ${this.texto}`)
  }

  render() {
    return (
      <form 
        className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <input 
          type="text" 
          placeholder="Titulo"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)} 
        />
        <textarea 
          placeholder="Digite aqui sua nota..."
          rows={15}
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)} 
        />
        <button className="form-cadastro_input 
  form-cadastro_submit">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;