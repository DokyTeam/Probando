import React, {Component} from 'react';
import Navegation from './components/Navegation.js';
import Carrusel from './components/Carrusel.js';
import Service from './components/Service.js';
import './App.css';



class App extends Component{
  render(){
  return (
    <div className="App color-backgroud">
      <header>
      <Navegation ></Navegation>
      </header>
     
      
        <div >
          <Carrusel></Carrusel>
          <h1 className = "text-align padding-section">Nuestros servicios</h1>
          <Service></Service>

                   
          
          
        </div>
       
         
      <footer>
        
        <Navegation>

        </Navegation>
      </footer>

    </div>
  );
  }
}

export default App;
