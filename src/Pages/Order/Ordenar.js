import React, { Component } from "react";
import CardList from "../CardList/CardList";
import axios from 'axios';
import './Ordenar.css'
import { useNavigate, useLocation } from 'react-router-dom';
import Popup from "../../Components/Popup/Popup";

class Ordenar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products : [],
      isOpen: false,
      openOrder: false,
      order:[],
    };
  }

  


  componentDidMount() {
    // Realiza la solicitud HTTP para obtener los datos de productos
    axios.get('http://localhost:5000/productos')
      .then(response => {
        this.setState({ products: response.data }); // Actualiza el estado con los datos obtenidos
        console.log("Datos obtenidos correctamente");
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }
  
  searchProduct = (product) => {
    const {order} = this.state
    if(order.find(x => x.id === product.id)){
      const newOrder = order.map(x => x.id === product.id 
        ? ({
          ...x,
          quantity: product.quantity
        })
        : x)

        return (this.setState({order: newOrder}))
    }
    return (this.setState(
      this.setState(
        (prevState) => ({
          order: prevState.order.concat({
            ...product,
          }),
        }),
        () => {
          // Esta función de devolución de llamada se ejecutará después de la actualización del estado
          // console.log(this.state.order);
        }
    )))
  };
  
  

  addOrder = (product) => {
    // console.log("Esta es la orden: ", product);
    //! Eliminar de la lista "order" cuando se presiona el boton "eliminar del pedido"
    this.searchProduct(product)   
}

  getOrder = () =>{
    console.log(this.state.order)
    if(this.state.order.length != 0){
        this.setState({openOrder:true})
    }else{
      alert("Seleccione algun producto")
    }
  }

  //! Check this hard reload. It's getting the information from the database again.

  resetState = () => {
    alert("Pedido creado")
      
  }
  // navigate('/carrito')
  // const navigate = useNavigate();

  closeOrder = () => {
    this.setState({openOrder:false})
  }
  
  render() {
    
    return (
      <div>
          <div id="full-content">
            <div id="order-button-space">
              <button id="new-order-button" onClick={this.resetState}>Nueva Orden</button>
              <button id="order-button" onClick={this.getOrder}>Ordenar!</button>
            </div>
            <h1>Selecciona la orden</h1>
            <CardList cardsData={this.state.products} 
                      getOrder={this.addOrder}
                      />
          </div>
        {
          this.state.openOrder && (
            <Popup closeOrder={this.closeOrder} products={this.state.order}/>
          )
        }
      </div>
    );
  }
}

export default Ordenar;
