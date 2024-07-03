import { useEffect, useRef, useState } from "react";

const MensajePrevio = () => {

    const [mensaje, setMensaje] = useState('');
    const prevMens = useRef('');

    useEffect(() => {
        prevMens.current = mensaje;
    }, [mensaje]);

    const modificaMensaje = (e) => {
        setMensaje(e.target.value);
    }//modificaMensaje

    return (
        <>
        <hr />
            <input type="text" onChange={modificaMensaje} />
        <br />
        <hr />
            <p>Mensaje: {mensaje}</p>
            <p>Mensaje previo: {prevMens.current} </p>
        </>
    );
}//MensajePrevio

export default MensajePrevio;