import React, { Component } from 'react';

import Upperbar from './upperbar/Upperbar.js';
import Carrusel from './carrusel-home/Carrusel.js';
import Service from './Service/Service.js';

class Homepage extends Component {
    render() {
        return (
            <div className="color-backgroud">
      <header>
      <Upperbar ></Upperbar>
      </header>
     
      
        <div className="text-align text-font ">
          <Carrusel></Carrusel>
          <h1 className = "text-section padding-section">Nuestros servicios</h1>
          <Service></Service>

                   
          
          
        </div>
       
         
      <footer>
        
        <Upperbar>

        </Upperbar>
      </footer>

    </div>
        );
    }
}

export { Homepage }; 