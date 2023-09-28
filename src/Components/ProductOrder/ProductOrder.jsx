import { Component } from "react";
import './ProductOrder.css'

class ProductOrder extends Component{
    state={
        productCard:{
            idCard: this.props.idCard,
            title: this.props.title,
            price: this.props.price,
            quantity: this.props.quantity,
            subTotal: (this.props.quantity * this.props.price)
        }
    }

    render() {
        {console.log(this.state)}
        const { idCard, id, title, content, price } = this.props;
        return (
          <div className="product-order">
            <div id="title">
              {this.state.productCard.title}
            </div>
            <div id="quantity">
              {this.state.productCard.quantity}
            </div>
            <div id="price">
              {this.state.productCard.price}
            </div>
            <div id="subTotal">
              {this.state.productCard.subTotal}
            </div>
          </div>
        )
      }
      
}
export default ProductOrder