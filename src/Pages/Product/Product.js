import { Component } from "react";
import ProductComp from "../../Components/Product/ProductComp";
import React from "react";

const cardsData = [
  { id: 1, title: 'MINI CHIKEN', content: '1 PRESA DE POLLO, PORCION DE PAPA' , price: 14},
  { id: 2, title: 'SUPER CHIKEN', content: '3 PRESAS DE POLLO, PORCION DE PAPA', price: 24 },
  { id: 3, title: 'DUO CHIKEN', content: '2 PRESAS DE POLLO, PORCION DE PAPA, PORCION DE ARROZ', price: 17 },
  { id: 4, title: 'KING CHIKEN', content: '1 PRESA DE POLLO, PORCION DE PAPA, PORCION DE ARROZ, POSTRE DULCE', price: 16 },
  { id: 5, title: 'MEGA CHIKEN', content: '4 PRESAS DE POLLO, 2 PORCIONES DE PAPA' , price: 45},
  { id: 6, title: 'POP CHIKEN', content: 'PIPOCAS DE POLLO, PORCION DE PAPA, REGRESCO' , price: 15},
];


class Product extends Component{
  
    render(){
       return(
        <div>
              <h1>Pagina de productos</h1>
                {cardsData.map((product) =>{
                  return(
                    <div>
                      <ProductComp 
                        key={product.id} // Asigna el id como clave única
                        id={product.id}
                        title={product.title}
                        content={product.content}
                        price={product.price}
                    />
                    </div>
                  )
                })}
                {/* <ProductComp/> */}

        </div>
       )
    }
}

export default Product;