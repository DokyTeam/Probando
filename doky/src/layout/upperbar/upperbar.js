import React, { Component } from 'react';
import './upperbar.css';
import shop from "./images/shop.jpeg"

class upperbar extends Component {
    render() {
        return (
            <div className="Navegation">


                <div class="d-flex bd-highlight color-dark align-items-center">
                    <div class="p-2 bd-highlight"><h1 className="text-light text-font font-italic text-uppercase padding-title">
                        doky
                </h1></div>
                    <div class="p-2 bd-highlight"><input className="form-control mr-sm-1 d-none d-sm-block font-weight-bolder" type="search" placeholder="Buscar" aria-label="Search"></input>
                    </div>
                    <div class="p-2 bd-highlight"><button className=" btn btn-outline-light my-2 my-sm-0 d-none d-sm-block font-weight-bolder" type="submit">Buscar</button>
                    </div>
                    <div class="ml-auto p-2 bd-highlight"><img src={shop} className="ustify-content-end logo-size" alt="logo" ></img>
                    </div>
                </div>




            </div>

        );
    }
}

export default upperbar; 