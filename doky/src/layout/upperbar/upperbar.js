import React, { Component } from 'react';
import './upperbar.css';
import shop from "./images/shop.jpeg"

class Upperbar extends Component {
    render() {
        return (
            <nav className="navbar  color-dark">
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={this.props.MainContainerhandler.bind(this,true)}>
                <h1 className="text-light  text-font font-italic text-uppercase ">
                    doky
                </h1>
                </button>
                <form className="form-inline my-2 my-lg-0 text-font ">
                    <input className="form-control mr-sm-2 " type="search" placeholder="Buscar" aria-label="Search"></input>
                    <button className=" btn btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
                </form>
                <img src={shop} className="logo-size" alt="logo" ></img>
            </nav>
        );
    }
}

export { Upperbar }; 