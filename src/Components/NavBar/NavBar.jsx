import { Component } from "react";
import Logo from '../Logo/Logo'
import './Navbar.css'   
import axios from "axios";



class Navbar extends Component{

  constructor(props) {
    super(props);
    this.state = {
      serverIP: '',
      port:'',
      openLink: false,
    };
  }

  componentDidMount() {
    // Ruta del archivo con la IP
    const filePath = process.env.PUBLIC_URL + '/ip.txt';
  
    // Hacer una solicitud para obtener la IP del servidor
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        console.log(data);
        this.setState({ serverIP: data }); // Actualiza el estado con la dirección IP
      })
      .catch(error => console.error('Error al obtener la IP:', error));
  }
  
  openLink = () =>{
    this.setState({openLink: true})
  }

  closeLink = () =>{
    this.setState({openLink: false})
  }

  render(){
    return(
      <div id="navbar">
        <Logo restName={this.props.restName}/>
        <div id="navegation">
          <a id="item" href="/">Inicio</a>
          <a id="item" href="/productos">Productos</a>
          <a id="item" href="/agregarProduct">Agregar producto</a>
          <button onClick={this.openLink}>Mas dispositivos</button>

          {this.state.openLink && (
            <div id="back-link">
                <div id="popup-link">
                <p>Para conectarte desde otro dispositivo, 
                    asegurate estar en la misma red. <br/>
                    Copia este enlace en tu navegador: </p>
                    <h2>http://{this.state.serverIP}:{window.location.port}</h2>
                  <button onClick={this.closeLink}>Cerrar</button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Navbar;
