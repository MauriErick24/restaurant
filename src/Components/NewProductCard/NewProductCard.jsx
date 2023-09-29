import { Component } from "react";
import './NewProductCard.css'
import axios from "axios";

const ADDRESS = '192.168.100.228';

class NewProductCard extends Component{
    
    state={
        name: "",
        detail:"",
        price: 0
    }

    changeState = (value, state) => {
        switch(state){
            case 'name': this.setState({name:value})
                break;
            case 'detail':this.setState({detail:value})
                break;
            case 'price':this.setState({price: value})
                break;
            default: ;
        }
    }

    addProduct = () => {
        if(this.state.name != ""
            && this.state.detail != ""
            && this.state.price != 0){
                console.log(this.state)
                this.postProduct()
            }else{
                alert("Todos los campos deben estar llenos")
            }
    }

    postProduct = () => {
            // Datos que se enviarán en el cuerpo de la solicitud POST
            const requestData = { name: this.state.name, detail: this.state.detail, price: this.state.price };
            console.log("requestData ", requestData)
            // Realiza la solicitud HTTP POST para obtener los datos de productos
            axios.post(`http://${ADDRESS}:5000/newProduct`, requestData)   
              .then(response => {
                // this.setState({ productData: response.data }); // Actualiza el estado con los datos obtenidos
                // console.log("Datos obtenidos correctamente");
                // console.log('datos: ',response.data);
                console.log("Producto enviado correctamente")
            })
              .catch(error => {
                console.error('Error al enviar producto:', error);
              });
    }
    
    render(){
        return(
            <div id="new-product-card">
                <div id="name-space">
                    <p>Nombre del producto</p>
                    <input id="input-product-name" 
                            type="text" 
                            placeholder="Agrega el nombre" 
                            value={this.state.name}
                            onChange={(e) => (this.changeState(e.target.value, 'name'))}/>
                </div>
                <div id="detail-new-product-space">
                    <p>Descripcion</p>
                    <textarea id="input-product-detail" 
                                type="text" 
                                placeholder="Agrega alguna descripcion" 
                                value={this.state.detail}
                                onChange={(e) => (this.changeState(e.target.value, 'detail'))}/>
                </div>
                <div id="price-new-product-space">
                    <p>Precio</p>
                    <input id="input-product-price" 
                            type="number" 
                            placeholder="Agrega el precio" 
                            value={this.state.price}
                            onChange={(e) => (this.changeState(e.target.value, 'price'))}/>
                </div>
                <div>
                    <button onClick={this.addProduct}>Agregar</button>
                </div>
            </div>
        )
    }
}

export default NewProductCard