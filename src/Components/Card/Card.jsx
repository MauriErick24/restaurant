import { Component } from "react"
import BubbleAlert from '../BubbleAlert/BubbleAlert'
import './Card.css'

class Card extends Component{

    state = {
        isOpen: false,
        quantity: 1,
        product:{},
        addProductPressed:false
    }

    // openQuantity = () =>{
    //     this.setState({isOpen:true})
      
        
    //        this.setState({
    //         product:
    //             {
    //                 id: this.props.id,
    //                 title: this.props.title,
    //                 content: this.props.content,
    //                 price: this.props.price,
    //                 quantity: 1
    //             }
    //         })
    //         console.log("card ", this.state.product)
    //     this.props.getOrder(this.state.product)
        
    //     }

    openQuantity = () => {
        // Utiliza la función de actualización de estado para asegurarte de obtener el estado actualizado
        this.setState({addProductPressed:true})
        this.setState((prevState) => {
            return {
                isOpen: true,
                product: {
                    id: this.props.id,
                    title: this.props.title,
                    content: this.props.content,
                    price: this.props.price,
                    quantity: 1,
                },
            };
        }, () => {
            // Llama a getOrder después de que el estado se haya actualizado
            this.props.getOrder(this.state.product);
        });
    }
    

    changeQuantity = (value) => {
        this.setState({quantity: value})
          // Utiliza la función de actualización de estado para asegurarte de obtener el estado actualizado
          this.setState((prevState) => {
            return {
                isOpen: true,
                product: {
                    id: this.props.id,
                    title: this.props.title,
                    content: this.props.content,
                    price: this.props.price,
                    quantity: value,
                },
            };
        }, () => {
            // Llama a getOrder después de que el estado se haya actualizado
            this.props.getOrder(this.state.product);
        });
    }

    closeQuantity = () => {
        this.changeQuantity(0)
        this.setState({addProductPressed:false})
        this.setState({isOpen:false})
        
    }
    

    render(){
        return(
            <div className='row'>
            <div className='column-card'>
                {this.state.isOpen && (
                    <span id="bubble">
                        {this.state.quantity && (
                             <BubbleAlert value={this.state.quantity}/>
                        )}
                        {/* {console.log(this.state.quantity)}
                        {console.log(this.state.product)} */}
                    </span>
                    
                )}
                {/* <img src={card.img} alt={card.title}/> */}
                <h3>{this.props.title}</h3>
                
                {/* {console.log(this.props.title)} */}
            </div>
            <div className='column-card'>
                <p>{this.props.content}</p>
            </div>
            <div className='column-card'>
                <h3>{this.props.price} Bs.</h3>
            </div>
            <div className='column-card'>

                {!this.state.addProductPressed && (
                    <button className='button' onClick={this.openQuantity} >Agregar al pedido</button>
                )}
                {this.state.addProductPressed && (
                    <button className='button' onClick={this.closeQuantity} >Eliminar del pedido</button>
                )}

                <div id="quantity-space">
                    {this.state.isOpen && (
                    <input id='quantity' 
                           type='number' 
                           placeholder='cantidad'
                           value={this.state.quantity}
                           onChange={(e) => this.changeQuantity(e.target.value)}/>
                    )}     
                </div>
            </div>
        </div>
        )
    }
}
export default Card;