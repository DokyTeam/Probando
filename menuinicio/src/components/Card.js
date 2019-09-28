import React, {Component} from 'react'
import './Components.css';

class Card extends Component{

    render(){ 
        return (
            <div className="col-lg-3">
              <img src={this.props.foto} alt="Generic placeholder " width="140" height="140"/>
              <h2>{this.props.titulo}</h2>
              <p>{this.props.descripcion}</p>
              <p><a className="btn btn-outline-dark" href="#" role="button">Más información »</a></p>
            </div>
        );
    }
}
export default Card;