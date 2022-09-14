import '../src/Assets/App.css';
import ListaDeNotas from './Components/ListaDeNotas/index';
import FormularioCadastro from './Components/FormularioCadastro/index';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super()
    this.notas = []
    this.state = {}
  }
  criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    this.notas.push(novaNota)
    this.setState({
      notas:this.notas
    })
  }
   
  render(){

    return (
      <section className='container-main'>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.notas}/>
      </section>
        
     
    );
  }

}

export default App; 
