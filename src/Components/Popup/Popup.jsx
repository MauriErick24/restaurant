import { Component } from "react";
import './Popup.css'
import ProductOrder from "../ProductOrder/ProductOrder";
import axios from 'axios';


class Popup extends Component{
    state = {
        nombre: "",
        ci: 0,
        total: 0,
        products: this.props.products
    }

    // totalPrice = (value) => {
    //     console.log("value ", value, " total ", this.state.total )
    //     return(this.setState({total: this.state.total + value}))
    // }

    componentDidMount() {
        this.calculateTotal();
      }

    calculateTotal = () => {
        const total = this.props.products.reduce((acc, product) => {
          return acc + product.quantity * product.price;
        }, 0);
    
        this.setState({ total });
      };

     setName = (value) =>{
        this.setState({nombre:value})
     }

     setCi = (value) =>{
        this.setState({ci:value})
     } 

    checkSpaces= () =>{
        if(this.state.nombre == ""){
            alert("Debes agregar algun nombre")
        }else{
            console.log("Nombre: ", this.state.nombre)
            if(this.state.ci != 0){
                console.log("CI: ", this.state.ci )
            }
            console.log(this.state.products);
            console.log(this.state.total);
            this.handleSubmitt()
            console.log(this.state)
            console.log(this.state.mensaje)
            this.goBack()
        }

     }

    goBack = () => {
      alert("Agregado correctamente")
      window.location.reload();
    }

     handleSubmitt = async () => {
        // e.preventDefault();
    
        const { nombre, ci, total, products } = this.state
    
        try {
          const response = await axios.post('http://localhost:5000/order/ticket', this.state);
          console.log('Respuesta del servidor:', response.data);
          this.setState({
            mensaje: 'Producto agregado exitosamente',
            producto: {
              nombre: '',
              precio: 0,
            },
          });
        } catch (error) {
          console.error('Error al ordenar el producto:', error);
          alert('Error al ordenar el producto');
          this.setState({
            mensaje: 'Error al ordenar el producto',
          });
        }
      };
    



    render(){
        const {closeOrder, products} = this.props;
        return(
           <div id="back">
            <div id="popup-container">
               <div id="popup-content">
                     <div id="popup-header">
                        <p>COMPROBANTE</p>
                        <button onClick={closeOrder}>cerrar</button>
                    </div>
                    <div id="client">
                            <p>Nombre:</p>
                            <input type="text" 
                                placeholder="Nombre..." 
                                value={this.state.nombre}
                                onChange={(e) => this.setName(e.target.value)}/>
                            <p>CI:</p>
                            <input type="number" 
                                value={this.state.ci}
                                onChange={(e) => this.setCi(e.target.value)}/>
                        </div>
                     <div id="popup-body">
                        <p id="detalle-title">Detalle del pedido</p>    
                        <div id="head">
                            <p>Producto</p>
                            <p>Cantidad</p>
                            <p>Precio/U</p>
                            <p>Subtotal</p>
                        </div>
                        {products.map((p) => (
                            <ProductOrder
                                key={p.id}
                                title={p.title}
                                price={p.price}
                                quantity={p.quantity}
                            />
                        ))}
                        <p id="total">Total: {this.state.total}</p>
                    </div>
                    <div id="space-accept">
                        <button onClick={this.checkSpaces}>Confirmar</button>
                    </div>
               </div>
            </div>
           </div>
        )
    }
}

export default Popup;