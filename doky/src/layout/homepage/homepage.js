import React, { Component } from 'react';

class Homepage extends Component {
    render() {
        return (
            <div className="color-backgroud">
      <header>
      <Navegation ></Navegation>
      </header>
     
      
        <div className="text-align text-font ">
          <Carrusel></Carrusel>
          <h1 className = "text-section padding-section">Nuestros servicios</h1>
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

export { Homepage }; 