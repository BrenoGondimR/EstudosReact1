import React from "react";
import { Component } from "react";
import "./estilo.css"


// Form com input titulo, discrição e butão para enviar
class FormularioCadastro extends Component {


  constructor(props){
    super(props)
    this.titulo= ""
    this.nota=""
    
  }

  // Salvando o titulo
  handleMudancaTitulo(evento){
    evento.stopPropagation()
    this.titulo = evento.target.value
    console.log(this.titulo)
  }

  // Salvando o texto do textarea
  handleMudancaTexto(evento){
    evento.stopPropagation()
    this.texto = evento.target.value
  }


  // Cria a nota com titulo e texto  
  _criarNota(evento){
    evento.preventDefault()
    evento.stopPropagation()
    this.props.criarNota(this.titulo,this.texto)

  }


  render() {
    return (
      <form className="card-form" onSubmit={this._criarNota.bind(this)}>
        <input className="card-form_input" type="text" placeholder="Titulo" onChange={this.handleMudancaTitulo.bind(this)}/>
        <textarea onChange={this.handleMudancaTexto.bind(this)} className="card-form_textarea" placeholder="Escreva sua nota..." rows={15}/>
        <button className="button_enviar">Criar Nota</button>
      </form>
    );
  }


}

export default FormularioCadastro;
