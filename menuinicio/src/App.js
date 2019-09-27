import React, {Component} from 'react';
import Navegation from './components/Navegation.js';
import './App.css';
import foto1 from './Images/imagen1.jpg';
import foto2 from './Images/imagen2.jpg';
import foto3 from './Images/imagen3.jpg';

class App extends Component{
  render(){
  return (
    <div className="App">
      <header>
      <Navegation ></Navegation>
      </header>
     
      <body>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active"  data-interval="1000">
                 <img src={foto1} className="d-block w-100" alt="logo"></img>
                   <div className="carousel-caption d-none d-md-block">
                     <h5  >First slide label</h5>
                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                   </div>
               </div>
              <div className="carousel-item" data-interval="1000">
                <img src={foto2} class="d-block w-100" alt="logo"></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5 clasName = "test-format">Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="carousel-item" data-interval="1000">
                <img src={foto3} class="d-block w-100" alt="logo"></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="sr-only">Previous</span>
             </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
              </a>
          </div>
          <div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <h1 className= "text-secondary"> Paseos</h1>
              <nav className="nav ">
                
                
              <div className="card style" >
                  <img src={foto1} className="card-img-top imagetamano" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">titulo paseo</h5>
                    <p className="card-text">info  paseo</p>
                    <a href="#" className="btn btn-primary">mas info</a>
                  </div>
                </div>

                <div className="card style" >
                  <img src={foto1} className="card-img-top imagetamano" alt="..."></img>
                  <div className="card-body">
                    <h5 className="card-title">titulo paseo</h5>
                    <p className="card-text">info  paseo</p>
                    <a href="#" className="btn btn-primary">mas info</a>
                  </div>
                </div>
                 
     
              </nav>
              </li>
              <li className="nav-item">
                <h1 className="text-secondary">Otra categoria</h1>
                    <p className="text-secondary">info  paseo</p>
              </li>
           
            </ul>
          </div>
      </body>     
      <footer>
        
        <Navegation>

        </Navegation>
      </footer>

    </div>
  );
  }
}

export default App;
