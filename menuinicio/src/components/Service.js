import React, {Component} from 'react'
import pasear from './Images/pasear.jpg';
import salto from './Images/salto.jpg';
import veterinaria from './Images/veterinaria.jpg';
import guarderia from './Images/guarderia.jpg';
import Card_sombra from "./Card_sombra.js";

class Service extends Component{

    render(){
        return(
         <div className="container marketing text-align .text-font padding-card">

          <div className="row">
            <Card_sombra titulo= "Paseo" descripcion="Accede a un catálogo de paseadores para tu mascota." foto = {pasear}>

            </Card_sombra>
            <Card_sombra titulo= "Veterinaria" descripcion="Encuentra la veterinaria de tu preferencia." foto = {veterinaria}>

            </Card_sombra>
            <Card_sombra titulo= "Guardería" descripcion="El mejor cuidado para tu mascota cuando no puedes estar con ella." foto = {guarderia}>

            </Card_sombra>
            <Card_sombra titulo= "Saltos" descripcion="Las mejores mascotas para tus cruces." foto = {salto}>

            </Card_sombra> 
            
          </div>
        </div>
        );
    }
}
export default Service;
