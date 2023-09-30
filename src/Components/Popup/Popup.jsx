import { Component } from "react";
import './Popup.css'
import ProductOrder from "../ProductOrder/ProductOrder";
import axios from 'axios';

const ADDRESS = '192.168.100.228';
class Popup extends Component{
    state = {
        nombre: "",
        ci: 0,
        total: 0,
        products: this.props.products,
        currentDate: new Date(),
    }

    // totalPrice = (value) => {
    //     console.log("value ", value, " total ", this.state.total )
    //     return(this.setState({total: this.state.total + value}))
    // }

    componentDidMount() {
        this.calculateTotal();
      }

    calculateTotal = () => {
        const total = this.props.products.reduce((acc, product) => {
          return acc + product.quantity * product.price;
        }, 0);
        console.log(total)
        const roundedTotal = total.toFixed(2);
        console.log(roundedTotal)
        this.setState({ total:roundedTotal });
      };

     setName = (value) =>{
        this.setState({nombre:value})
     }

     setCi = (value) =>{
        this.setState({ci:value})
     } 

    checkSpaces= () =>{
        if(this.state.nombre == ""){
            alert("Debes agregar algun nombre")
        }else{
            console.log("Nombre: ", this.state.nombre)
            if(this.state.ci != 0){
                console.log("CI: ", this.state.ci )
            }
            console.log(this.state.products);
            console.log(this.state.total);
            // this.handleSubmitt()
            console.log(this.state)
            console.log(this.state.mensaje)
            // window.print()

            // const formattedDate = `${this.state.currentDate.getFullYear()}-${(this.state.currentDate.getMonth() + 1).toString().padStart(2, '0')}-${this.state.currentDate.getDate().toString().padStart(2, '0')}`;

          // Abre la ventana de impresión
          const printWindow = window.open("", "_blank");
          
          // Coloca la lógica de impresión dentro de la ventana
          if (printWindow) {
            printWindow.document.write(`
            <html>
            <head>
              <title>Imprimir</title>
              <style>
                /* Estilos CSS para la impresión */
                body {
                  font-family: Arial, sans-serif;
                  font-size: 15px;
                }
                @media print {
                  @page {
                    size: 58mm 297mm; /* Tamaño A4 por ejemplo */
                    margin: 0mm; /* Márgenes */
                  }                
                table {
                  width: 40%;
                  border-collapse: collapse;
                  font-size: 10px;
                }
                th, td {
                  border: 1px solid #dddddd;
                  text-align: left;
                  padding: 8px;
                  font-size: 10px;
                }
                th {
                  background-color: #f2f2f2;
                }
              </style>
            </head>
            <body>
              <!-- Contenido que deseas imprimir -->
              <h3>COMPROBANTE DE ORDEN</h3>
              ------------------------------
              <div>
                <p>Nombre: ${this.state.nombre}</p>
                <p>CI: ${this.state.ci}</p>
              ------------------------------
                <!-- Agrega aquí el contenido adicional que deseas imprimir -->
                <table>
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th>Precio Unitario</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${this.state.products.map(product => `
                      <tr>
                        <td>${product.title}</td>
                        <td>${product.quantity}</td>
                        <td>${product.price}</td>
                        <td>${product.quantity * product.price}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
                ------------------------------
                <p>Total: ${this.state.total} </p>
                ------------------------------
                <p>Fecha: ${this.state.currentDate}</p>
                ------------------------------
                <h3>Gracias por su compra!</h3>
              </div>
            </body>
          </html>
            `);

            // Cierra la ventana después de imprimir
            printWindow.document.close();
            printWindow.print();
            printWindow.close();
          } else {
            alert("No se pudo abrir la ventana de impresión.");
          }

           // this.goBack()
        }

     }

    goBack = () => {
      alert("Agregado correctamente")
      window.location.reload();
    }

     handleSubmitt = async () => {
        // e.preventDefault();
    
        const { nombre, ci, total, products } = this.state
    
        try {
          const response = await axios.post(`http://${ADDRESS}:5000/order/ticket`, this.state);
          console.log('Respuesta del servidor:', response.data);
          this.setState({
            mensaje: 'Producto agregado exitosamente',
            producto: {
              nombre: '',
              precio: 0,
            },
          });
        } catch (error) {
          console.error('Error al ordenar el producto:', error);
          alert('Error al ordenar el producto');
          this.setState({
            mensaje: 'Error al ordenar el producto',
          });
        }
      };
    



    render(){
        const {closeOrder, products} = this.props;
        return(
           <div id="back">
            <div id="popup-container">
               <div id="popup-content">
                     <div id="popup-header">
                        <p>COMPROBANTE</p>
                        <button onClick={closeOrder}>cerrar</button>
                    </div>
                    <div id="client">
                            <p>Nombre:</p>
                            <input type="text" 
                                placeholder="Nombre..." 
                                value={this.state.nombre}
                                onChange={(e) => this.setName(e.target.value)}/>
                            <p>CI:</p>
                            <input type="number" 
                                value={this.state.ci}
                                onChange={(e) => this.setCi(e.target.value)}/>
                        </div>
                     <div id="popup-body">
                        <p id="detalle-title">Detalle del pedido</p>    
                        <div id="head">
                            <p>Producto</p>
                            <p>Cantidad</p>
                            <p>Precio/U</p>
                            <p>Subtotal</p>
                        </div>
                        {products.map((p) => (
                            <ProductOrder
                                key={p.id}
                                title={p.title}
                                price={p.price}
                                quantity={p.quantity}
                            />
                        ))}
                        <p id="total">Total: {this.state.total}</p>
                    </div>
                    <div id="space-accept">
                        <button onClick={this.checkSpaces}>Confirmar</button>
                    </div>
               </div>
            </div>
           </div>
        )
    }
}

export default Popup;