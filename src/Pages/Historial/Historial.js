import { Component } from "react";
import OrderDetail from "../../Components/OrderDetail/OrderDetail";
import './Historial.css'
import axios from "axios";

// const cardsData = [
//     // { id: 1, title: 'MINI CHIKEN', content: '1 PRESA DE POLLO, PORCION DE PAPA' , price: 14},
//     // { id: 2, title: 'SUPER CHIKEN', content: '3 PRESAS DE POLLO, PORCION DE PAPA', price: 24 },
//     // { id: 3, title: 'DUO CHIKEN', content: '2 PRESAS DE POLLO, PORCION DE PAPA, PORCION DE ARROZ', price: 17 },
//     // { id: 4, title: 'KING CHIKEN', content: '1 PRESA DE POLLO, PORCION DE PAPA, PORCION DE ARROZ, POSTRE DULCE', price: 16 },
//     // { id: 5, title: 'MEGA CHIKEN', content: '4 PRESAS DE POLLO, 2 PORCIONES DE PAPA' , price: 45},
//     // { id: 6, title: 'POP CHIKEN', content: 'PIPOCAS DE POLLO, PORCION DE PAPA, REGRESCO' , price: 15},
//     // {id: 1, client: 'Juanito mendoza perez bonaparte', ci: 1234567890, ordersequence: 100, totalorder: 1000, date: "2023-05-12"} ,
//     // {id: 2, client: 'cliente2', ci: 1234567890, ordersequence: 2, totalorder: 25, date: "2023-05-12"},
//     // {id: 3, client: 'cliente3', ci: 1234567890, ordersequence: 3, totalorder: 30, date: "2023-05-12"},
//     // {id: 4, client: 'cliente4', ci: 1234567890, ordersequence: 4, totalorder: 10, date: "2023-05-12"},
//     // {id: 5, client: 'cliente5', ci: 1234567890, ordersequence: 5, totalorder: 15, date: "2023-05-12"},
//   ];
class Historial extends Component {
  state = {
    cardsData: [],
  };

  componentDidMount() {
    // Realiza la solicitud HTTP para obtener los datos de productos
    axios.get('http://localhost:5000/history')
      .then(response => {
        this.setState({ cardsData: response.data }); // Actualiza el estado con los datos obtenidos
        console.log("Datos obtenidos correctamente");
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }

  render() {
    return (
      <div id="container-historial">
        <h1>Pagina del Historial</h1>
        <div className="table-header">
          <p className="table-cell">ID</p>
          <p className="table-cell">Cliente</p>
          <p className="table-cell">CI</p>
          <p className="table-cell">Orden</p>
          <p className="table-cell">Total</p>
          <p className="table-cell">Fecha</p>
          <p className="table-cell">Ver mas</p>
        </div>

        <div id="container-content">
          {console.log(this.state.cardsData)}
          {this.state.cardsData.map((p) => (
            <OrderDetail 
              idorder={p.idorder}
              client={p.clientname}
              ci={p.clienteci}
              ordersequence={p.ordersequence}
              totalorder={p.totalorder}
              date={new Date(p.order_date).toISOString().split("T")[0]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Historial;


