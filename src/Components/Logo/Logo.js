import { Component } from "react";

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem',
        cursor:'pointer',
        padding: "10px"
    }
}

class Logo extends Component{
    render(){
        return(
         <div style={styles.logo}>
            {this.props.restName}
         </div>   
        )
    }
}

export default Logo;