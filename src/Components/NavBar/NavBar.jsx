import { Component } from "react";
import Logo from '../Logo/Logo'
import './Navbar.css'


class Navbar extends Component{

  render(){
    return(
      <div id="navbar">
        <Logo restName={this.props.restName}/>
        <div id="navegation">
          <a id="item" href="/">Inicio</a>
          <a id="item" href="/productos">Productos</a>
          <a id="item" href="/agregarProduct">Agregar producto</a>
        </div>
      </div>
    )
  }
}

export default Navbar;
