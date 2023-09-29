import { Component } from "react";
import Logo from '../Logo/Logo'
import './Navbar.css'   
import axios from "axios";



class Navbar extends Component{

  // state ={
  //   id:0
  // }
  // componentDidMount() {
  //   this.fetchData();
  // }

  // fetchData = async () => {
  //   axios.get('http://localhost:5000/getIpAddress')
  // .then(response => {
  //   const ip = response.data;
  //   console.log(ip)
  //   console.log('Dirección IP actual:', ip);
  // })
  // .catch(error => {
  //   console.error('Error al obtener la dirección IP:', error);
  // });
  // };

  render(){
    return(
      <div id="navbar">
        <Logo restName={this.props.restName}/>
        <div id="navegation">
          <a id="item" href="/">Inicio</a>
          <a id="item" href="/productos">Productos</a>
          <a id="item" href="/agregarProduct">Agregar producto</a>
          <p>direccion: {this.state.ip}</p>
        </div>
      </div>
    )
  }
}

export default Navbar;
