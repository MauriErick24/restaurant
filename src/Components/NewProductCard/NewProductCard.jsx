import { Component } from "react";
import './NewProductCard.css'

class NewProductCard extends Component{
    render(){
        return(
            <div id="new-product-card">
                <div id="name-space">
                    <p>Nombre del producto</p>
                    <input id="input-product-name" type="text" placeholder="Agrega el nombre"/>
                </div>
                <div id="detail-new-product-space">
                    <p>Descripcion</p>
                    <textarea id="input-product-detail" type="text" placeholder="Agrega alguna descripcion"/>
                </div>
                <div id="price-new-product-space">
                    <p>Precio</p>
                    <input id="input-product-price" type="number" placeholder="Agrega el precio"/>
                </div>
                <div>
                    <button>Aceptar</button>
                </div>
            </div>
        )
    }
}

export default NewProductCard