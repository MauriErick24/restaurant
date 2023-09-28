
import './Inicio.css'
import { useNavigate } from 'react-router-dom';


function Home(){

    const navigate = useNavigate();
    

    function HandleClickOrder(){
        navigate('/ordenar')
        console.log("Nueva orden");   
    }

    function handleClickHistorial(){
        navigate('/historial')
        console.log("ver historial");
    }

    return(
        <div className="container-inicio">
            <div className="column-inicio" >
                <div className="row-inicio" onClick={HandleClickOrder}>
                    NUEVA ORDEN
                </div>
                <div className="row-inicio" onClick={handleClickHistorial}>
                    HISTORIAL
                </div>
            </div>
            
        </div>
    );
}
export default Home;