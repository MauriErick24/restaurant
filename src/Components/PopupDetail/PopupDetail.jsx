import { Component } from "react";
 import ProductOrder from "../ProductOrder/ProductOrder";
 import './PopupDetail.css'
 import axios from "axios";

class PopupDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
          productData: [],
          idorder: this.props.idorder, // Cambia esto al ID que desees consultar
        };
      }
    
      componentDidMount() {
        // Datos que se enviarán en el cuerpo de la solicitud POST
        const requestData = { idorder: this.state.idorder };
        console.log("requestData ", requestData)
        // Realiza la solicitud HTTP POST para obtener los datos de productos
        axios.post('http://localhost:5000/history/id', requestData)
          .then(response => {
            this.setState({ productData: response.data }); // Actualiza el estado con los datos obtenidos
            console.log("Datos obtenidos correctamente");
            console.log('datos: ',response.data);
          })
          .catch(error => {
            console.error('Error al obtener datos:', error);
          });
      }
    
    render(){
        const {closeDetail, products} = this.props
        {console.log(this.props)}
        return(
            <div id="popup-detail-content">
               <div id="popup-detail-card">
                    <div id="popup-detail-data">
                        <p>Mas detalle sobre la orden</p>
                        <p id="a-t">Cliente:</p>
                        <p>{this.props.client}</p>
                        {/* <p>Cliente 1</p> */}
                        <p id="a-t">CI:</p>
                        <p>{this.props.ci}</p>
                        {/* <p>1234567890</p> */}
                    </div>
                    <hr/>
                    <div id="popup-body">
                        <p id="detalle-title">Detalle del pedido</p>    
                        <div id="head">
                            <p>Producto</p>
                            <p>Cantidad</p>
                            <p>Precio/U</p>
                            <p>Subtotal</p>
                        </div>
                        {this.state.productData.map((p) => (
                            <ProductOrder
                                key={p.id}
                                title={p.title}
                                price={p.price}
                                quantity={p.quantity}
                            />
                        ))}
                        <p>Total: {this.props.totalorder}</p>
                    </div>
                    <button id="button-close" onClick={closeDetail}>Cerrar</button>
               </div>

            </div>
        )
    }
}

export default PopupDetail;