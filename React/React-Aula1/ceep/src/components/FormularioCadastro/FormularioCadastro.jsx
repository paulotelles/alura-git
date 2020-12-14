import React, { Component } from "react"
import "./estilo.css"

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input 
          type="text" 
          placeholder="Titulo"
          className="form-cadastro_input" 
        />
        <textarea 
          placeholder="Digite aqui sua nota..."
          rows={15}
          className="form-cadastro_input" 
        />
        <button className="form-cadastro_input 
  form-cadastro_submit">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;