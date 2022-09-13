import React from "react";
import { Component } from "react";
import "./estilo.css"


// Form com input titulo, discrição e butão para enviar
class FormularioCadastro extends Component {
  render() {
    return (
      <form className="card-form">
        <input className="card-form_input" type="text" placeholder="Titulo" />
        <textarea className="card-form_textarea" placeholder="Escreva sua nota..." />
        <button className="button_enviar">Criar Nota</button>
      </form>
    );
  }


}

export default FormularioCadastro;
