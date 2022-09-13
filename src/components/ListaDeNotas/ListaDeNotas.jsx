import React from "react";
import { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css"

// Array com os titulos adicionados que vao ser adicionados de maneira simples quando for requisitado no "App.js" 
class ListaDeNotas extends Component {
    render(){
        return (
          <ul className="card_ul">
            {Array.of("Trabalho", "Estudos").map((categoria, index) => {
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