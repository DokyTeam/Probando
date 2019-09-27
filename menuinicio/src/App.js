import React, {Component} from 'react';
import Navegation from './components/Navegation.js';
import './App.css';
import foto1 from './Images/imagen1.jpg';
import foto2 from './Images/imagen2.jpg';
import foto3 from './Images/imagen3.jpg';
import pasear from './Images/pasear.jpg';
import salto from './Images/salto.jpg';
import veterinaria from './Images/veterinaria.jpg';
import guarderia from './Images/guarderia.jpg';

class App extends Component{
  render(){
  return (
    <div className="App color-ligth">
      <header>
      <Navegation ></Navegation>
      </header>
     
      <body>
        <div className="color-ligth">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner text-align">
              <div className="carousel-item active"  data-interval="1000">
                 <img src={foto1} className="d-block w-100" alt="logo"></img>
                   <div className="carousel-caption d-none d-md-block">
                     <h5 className="text-uppercase">Un mundo de posibilidades</h5>
                     <p>Para el cuidado de tu mascota.</p>
                   </div>
               </div>
              <div className="carousel-item" >
                <img src={foto2} class="d-block w-100" alt="logo"></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text-uppercase">La única aplicación que te ofrece</h5>
                  <p>El servicio de saltos.</p>
                </div>
              </div>
              <div className="carousel-item" >
                <img src={foto3} class="d-block w-100" alt="logo"></img>
                <div className="carousel-caption d-none d-md-block ">
                  <h5 className="text-uppercase">Lo que quieres para tu mascota </h5>
                  <p>En un solo lugar.</p>
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

          {/*
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
          */}

          <h1 className = "text-align padding-section">Nuestros servicios</h1>
          
          <div class="container marketing text-align padding-card">

          <div className="row">
            <div className="col-lg-3">
              <img src={pasear} alt="Generic placeholder image" width="140" height="140"/>
              <h2>Paseos</h2>
              <p>Accede a un catálogo de paseadores para tu mascota.</p>
              <p><a class="btn btn-outline-dark" href="#" role="button">Más información »</a></p>
            </div>
            <div className="col-lg-3">
              <img src={veterinaria} alt="Generic placeholder image" width="140" height="140"/>
              <h2>Veterinaria</h2>
              <p>Encuentra la veterinaria de tu preferencia.</p>
              <p><a className="btn btn-outline-dark" href="#" role="button">Más información »</a></p>
            </div>
            <div className="col-lg-3">
              <img  src={salto} alt="Generic placeholder image" width="140" height="140"/>
              <h2>Saltos</h2>
              <p>Las mejores mascotas para tus cruces.</p>
              <p><a className="btn btn-outline-dark" href="#" role="button">Más información »</a></p>  
            </div>
            <div className="col-lg-3">
              <img  src={guarderia} alt="Generic placeholder image" width="140" height="140"/>
              <h2>Guardería</h2>
              <p>El mejor cuidado para tu mascota cuando no puedes estar con ella.</p>
              <p><a className="btn btn-outline-dark" href="#" role="button">Más información »</a></p>  
            </div>
          </div>
        </div>
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
