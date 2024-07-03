import { useEffect, useState } from "react";

const Contador = () => {
    
    const [cont, setCont] = useState(0);

    const Aumenta = ()=> {
        setCont(cont+1)
    }//Aumenta

    const Reiniciar = ()=> {
        setCont(0)
    }//Reiniciar

    console.log(`Contador: ${cont}`)
    return <div>
        <br />
        <br />
        <button onClick={()=> Aumenta()} > Agrega uno </button>
        <button onClick={()=> Reiniciar()} >Reiniciar</button>
        <hr></hr><hr></hr>
        <h1> Llevamos: {cont} </h1>
        <hr></hr><hr></hr>      
    </div>
}//Contador

export default Contador;