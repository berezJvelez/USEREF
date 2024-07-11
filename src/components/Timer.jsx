import { useEffect, useRef, useState } from "react"

const Temporizador = ()=> {
    
    const standBy = useRef();
    const timer = useRef(0);
    const [cont, setCont] = useState(0);
    const continua = 0;

    useEffect( ()=> {
        timer.current = setInterval( ()=>
            setCont(cont => cont + 1), 1000
        )//setInterval
        console.log('useEffect')
    },
    [continua]
    );//useEffect

    const detener = () => {
        clearInterval(timer.current);
        timer.current = 0;
        console.log(`Timer finalizado en: ${cont} segundos`)
        setCont(count => 'Finalizado')
    }//detener

    const reiniciar = () => {
        setCont (count => 0)
    }//reiniciar

    const continuar = () => {
        setCont(standBy.current + 1);
        continua = 1 ;
    }//reiniciar

    const pausa = () => {
        setCont(count => 'Pausa')
        standBy.current = cont;
        console.log(`Contador se pausó en el segundo: ${standBy.current}`)
    }//reiniciar

    
    return <div>
        <hr />
        <p>Contador: {cont}</p>
        <br />
        <button onClick={pausa} >Pausa</button>
        <button onClick={continuar} >Continuar</button>
        <br />
        <br />
        <button onClick={detener} id='detener'>Detener</button>
        <button onClick={reiniciar}>Reiniciar</button>
        <hr />
    </div>
}//Temporizador

export default Temporizador;