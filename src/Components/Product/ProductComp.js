import { Component } from "react";
import './ProductComp.css'
import Edit from "../../Pages/Edit/Edit";


class ProductComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            popupData: '',
        }
    }

    openPopup = () => {
        this.setState({isOpen:true})
        console.log(this.state.isOpen)
      }
  
      closePopup = () => {
        this.setState({isOpen:false})
      }
    
      click =() =>{
        console.log("Click")
      }

    render(){
        return(
            <div id="product-item">
              <div>
                {this.state.isOpen && (
                    <Edit closePopup ={this.closePopup} 
                        title = {this.props.title}
                        content ={this.props.content}
                        price = {this.props.price}/>
                )}
              </div>
              <div id="products">
                <div id="product-description">
                        <p>{this.props.title}</p>
                        <p id="description">{this.props.content}</p>
                        <p>{this.props.price} Bs</p>
                </div>
                    <div id="options">
                        <button onClick={this.openPopup} id="btn-option">Editar</button>
                        <button id="btn-option">Borrar</button>
                    </div>
              </div>
            </div>
        )
    }
}

export default ProductComp;