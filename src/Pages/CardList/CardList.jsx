import './Card.css'
import { Component } from 'react';
import Card from '../../Components/Card/Card';


class CardList extends Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
        }
    }

    openQuantity = () => {
        this.setState({isOpen: true});
    }

    render(){
        return(
            <div className="card-container">
                {this.props.cardsData.map((card) => (
                <div key={card.id} className="card">
                <div className='container-card'>
                    <Card id={card.id}
                        title={card.title}
                        content={card.content}
                        price = {card.price}
                        getOrder={this.props.getOrder}
                        isOpen={this.props.isOpen}/>

                </div>
                </div>
              ))}
              
            </div>
        );
    }
}

export default CardList;