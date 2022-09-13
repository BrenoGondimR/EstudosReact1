import './App.css';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Component } from 'react';

class App extends Component {
   
  render(){

    return (
      <section className='container-main'>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
        
     
    );
  }

}

export default App; 
