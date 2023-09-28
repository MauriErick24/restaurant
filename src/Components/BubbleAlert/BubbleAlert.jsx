import { Component } from "react";
import './BubbleAlert.css'

class BubbleAlert extends Component{
    getNumber(n){
        if(n>9){
            return '9+';
        }else{
            return n;
        }
    }
    render(){
        const {value} = this.props;    
        return(
            <span id="bubbleAlert">
                {this.getNumber(value)}
            </span>
        )
    }
}
export default BubbleAlert