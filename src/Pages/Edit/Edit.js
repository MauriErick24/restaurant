import { Component } from "react";
import './Edit.css'


class Edit extends Component{
    constructor(props){
        super(props);
        this.state={
            title: props.title,
            content: props.content,
            price: props.price,
        }
    }
    render(){
        return(
            <div>
                    <div id="box-card">
                    <div id="title-card">
                        <h3>Editar elemento</h3>
                    </div>
                    <div id="box-card2">
                        <div id="content-card">   
                            <h3>Nombre</h3>  
                            <input id="title-card" type="text" value={this.state.title} 
                                onChange={(e) => this.setState({ title: e.target.value })}/>
                            <hr/>
                            <h3>Contenido</h3>  
                            <textarea id="content-card" value={this.state.content} 
                                onChange={(e) => this.setState({ content: e.target.value })}/>    
                             <h3>Precio</h3>  
                            <input id="price-card" type="money" value={this.state.price} 
                                onChange={(e) => this.setState({ price: e.target.value })}/>
                             <button id={"btn-option"} onClick={this.props.closePopup}>Aceptar</button>
                        </div>
                        <div id="button-card">
                           
                        </div>
                        
                    </div>
                    
                </div>
                <hr/>
            </div>
            
        );
    }
}
export default Edit;