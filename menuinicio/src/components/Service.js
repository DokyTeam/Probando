import React, {Component} from 'react'
import pasear from './Images/pasear.jpg';
import salto from './Images/salto.jpg';
import veterinaria from './Images/veterinaria.jpg';
import guarderia from './Images/guarderia.jpg';
import Card from "./Card.js"


class Service extends Component{

    render(){
        return(
         <div className="container marketing text-align padding-card">

          <div className="row">
            <Card titulo= "Paseo" descripcion="Accede a un catálogo de paseadores para tu mascota." foto = {pasear}>

            </Card>
            <Card titulo= "Veterinaria" descripcion="Encuentra la veterinaria de tu preferencia." foto = {veterinaria}>

            </Card>
            <Card titulo= "Guardería" descripcion="El mejor cuidado para tu mascota cuando no puedes estar con ella." foto = {guarderia}>

            </Card>
            <Card titulo= "Saltos" descripcion="Las mejores mascotas para tus cruces." foto = {salto}>

            </Card> 
            
          </div>
        </div>
        );
    }
}
export default Service;
