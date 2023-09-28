import { Component } from "react";
import './AddProduct.css'
import NewProductCard from '../../Components/NewProductCard/NewProductCard'

class ProductAdder extends Component{
    render(){
        return(
            <div id="productAdder-container">
                <h1>Agrega un nuevo producto</h1>
                <NewProductCard/>
            </div>
        )
    }
}
export default ProductAdder