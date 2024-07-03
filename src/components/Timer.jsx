import { useEffect, useRef, useState } from "react"

const Contador = ()=> {
    
    const play = useRef(0);
    const timer = useRef(0);
    const [cont, setCont] = useState(0);

    useEffect( ()=> {
        timer.current = setInterval( ()=>
            setCont(cont => cont + 1), 1000
        )//setInterval
        console.log('render')
    },
    []
    );//useEffect

    const detener = () => {
        clearInterval(timer.current);
        timer.current = 0;
    }//HandlerClick

    const continuar = () => {
        timer.current = 0;
        play.current = 1;
        console.log(`timer: ${timer.current}`)
        console.log(`play: ${play.current}`)
    }//HandlerClick

    const reiniciar = ()=> {
        setCont(0)
    }//Reiniciar
    
    return <div>
        <p>Contador: {cont}</p>
        <button onClick={detener}>Detener</button>
        <button onClick={continuar}>Continuar</button>
        <br />
        <button onClick={reiniciar}>Reiniciar</button>
        <hr />
        <p>timer.current: {timer.current} </p>
    </div>
}//Contador

export default Contador;