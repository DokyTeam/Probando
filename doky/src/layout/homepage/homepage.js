import React, { Component } from 'react';

import upperbar from '../upperbar/upperbar';
import Carrusel from '../carrusel-home/Carrusel.js';
import Service from '../service/Service.js';

class Homepage extends Component {
    render() {
        return (
            <div className="color-backgroud">
      <header>
      <upperbar ></upperbar>
      </header>
     
      
        <div className="text-align text-font ">
          <Carrusel></Carrusel>
          <h1 className = "text-section padding-section">Nuestros servicios</h1>
          <Service></Service>

                   
          
          
        </div>
       
         
      <footer>
        
        <upperbar>

        </upperbar>
      </footer>

    </div>
        );
    }
}

export { Homepage }; 