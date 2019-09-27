import React, { Component } from 'react';
import './landingpage.css';
import pug from "./images/pug.png"
import cat from "./images/gato.png"
import cuy from "./images/cuy.png"
import foto1 from "./images/foto1.jpeg"
import foto2 from "./images/foto2.jpeg"
import foto3 from "./images/foto3.jpeg"

class Landingpage extends Component {
    render() {
        return (
            <div>
                <div className="landingpage">
                    <LeftContent />
                    <RightContent MainContainerhandler={this.props.MainContainerhandler}/>
                </div>
                <div className="lowerbar">
                    <h1> About Us </h1>
                    <h1> Contact US </h1>
                    <h1> Authorized Dealers </h1>
                </div>
            </div>
        );
    }
}

class LeftContent extends Component {
    render() {
        return (
            <div className="leftcontainer">
                <p style={{ fontSize: 22 }}>Conoce a Doky</p>
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
                <img src={foto2} className="d-block w-100" alt="logo"></img>
                <div className="carousel-caption d-none d-md-block">
                  <h5 className = "test-format">Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="carousel-item" data-interval="1000">
                <img src={foto3} className="d-block w-100" alt="logo"></img>
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
                <div className="pugcontainer">
                    <img align="middle" alt="imagen de un gato" title="El PUG" src={pug} width="80px"></img>
                    <div>
                        <p style={{ textAlign: "center", fontSize: 20 }}>¿Que es Doky?</p>
                        <p style={{ textAlign: "center", fontSize: 11 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        );
    }
}

class RightContent extends Component {
    constructor(props) {
        super(props)
        this.state = { isEdit: true }
        this.handler = this.rightcontenthandler.bind(this)
    }
    rightcontenthandler(some) {
        this.setState({
            isEdit: some
        })
    }
    render() {
        return (
            <div className="rightcontainer">
                {(this.state.isEdit) ? <Login rightcontenthandler={this.handler} MainContainerhandler={this.props.MainContainerhandler}/> : <Register rightcontenthandler={this.handler} />}
            </div>
        );
    }
}

class Login extends Component {
    render() {
        return (
            <div>
                <p style={{ marginTop: 70}}>WELCOME BACK!!!</p>
                <img align="middle" alt="imagen de un gato" title="El GATO" src={cat} width="80px"></img>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <h6>USUARIO</h6>
                    <label>
                        <input type="text" className="input"/>
                    </label>
                    <br/>
                    <br/>
                    <h6>CONTRASEÑA</h6>
                    <label>
                        <input type="text" className="input"/>
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Sign In" className = "button" onClick={this.props.MainContainerhandler.bind(this,false)}/>
                    
                </form>
                <button className = "button2" onClick={this.props.rightcontenthandler.bind(this,false)}>Sign Up</button>
            </div>
        );
    }
}

class Register extends Component {
    render() {
        return (
            <div>
                <p style={{ marginTop: 40}}>Create a new account</p>
                <img align="middle" alt="imagen de un gato" title="El CUY" src={cuy} width="80px"></img>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit}>
                     <label>
                        USERNAME:
                        <input type="text" className="input"/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        YOUR EMAIL:
                        <input type="text" className="input"/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        PASSWORD:
                        <input type="text" className="input"/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        YOUR NAME:
                        <input type="text" className="input"/>
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Create" className = "button"/>
                    
                </form>
                <button onClick={this.props.rightcontenthandler.bind(this,true)} className = "button2">Go back</button>
            </div>
        );
    }
}


export { Landingpage }; 