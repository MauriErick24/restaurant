import { Component } from "react";
import './OrderDetail.css'
import PopupDetail from '../PopupDetail/PopupDetail'
  
  //! endpoint para recuperar el historial de ordenes. 

class OrderDetail extends Component{

    state = {
        isOpen:false,
        idorder: this.props.idorder,
    }

    openDetail = ()=>{
        this.setState({isOpen:true})
    }

    closeDetail = ()=>{
        this.setState({isOpen:false})
    }

    render() {
        const { idorder, client, ci, ordersequence, totalorder, date } = this.props;
        return (
          <div id="container-detail-order" className="order-container">
            <p className="table-cell">{idorder}</p>
            <p className="table-cell">{client}</p>
            <p className="table-cell">{ci}</p>
            <p className="table-cell">{ordersequence}</p>
            <p className="table-cell">{totalorder} Bs.</p>
            <p className="table-cell">{date}</p>
            <button id="button-detaild" onClick={this.openDetail}>Ver detalle</button>
            {console.log("idorder ", idorder)}
            {this.state.isOpen && (
                <PopupDetail idorder={idorder}
                  closeDetail={this.closeDetail}
                  client={client}
                  ci={ci}
                  totalorder={totalorder}
                    />
            )}
          </div>
        );
      }     
}

export default OrderDetail;