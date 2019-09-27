import React, {Component} from 'react';
import './Navegation.css';
import logo from'./pet-shop.svg'

class Navegation extends Component{

    render(){
        return (
        <div className="Navegation">
            
            <nav className="navbar  color-nav  ">
                <h1 className= "text-light  text-font font-italic text-uppercase ">
                    doky
                </h1>
                <form className="form-inline my-2 my-lg-0 text-font ">
                    <input className="form-control mr-sm-2 " type="search" placeholder="Buscar" aria-label="Search"></input>
                    <button className=" btn btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
                 </form>

                 <img src={logo} className="logo-size" alt="logo" ></img>

            </nav>
           
            
        </div>

        )
    }

}

export default Navegation