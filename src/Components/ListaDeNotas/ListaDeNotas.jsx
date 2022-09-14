import React from "react";
import { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css"

// Array com os titulos adicionados que vao ser adicionados de maneira simples quando for requisitado no "App.js" 
class ListaDeNotas extends Component {




  // funcao que pega do criar nota o titulo e o texto
  render(){
        return (
          <ul className="card_ul">
            {this.props.notas.map((nota, index) => {
              return (
                <li key={index}>
                  <CardNota />
                </li>
              );
            })}
          </ul>
 
        );
    }
   
}

export default ListaDeNotas