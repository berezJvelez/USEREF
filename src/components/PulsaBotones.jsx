import { useRef, useState } from "react";

const PulsaBotones = () => {
    
    const ref = useRef(0);
    //const [cont, setCont] = useState(0);

    const handleClick = (incrementa) => {
        if (incrementa){
            ref.current++;
        }else {
            ref.current--;
        }//if+-

        console.log(`Ref: ${ref.current}`);
    }//handleClick

    console.log('~~~~~~~~~~~~~~~~~~RENDER~~~~~~~~~~~~~~~~~')

    return <div>
        <button onClick={() => handleClick(false)}>Decrementa</button>
        <button onClick={() => handleClick(true)}>Incrementa</button>
    </div>
    
}//PulsaBotones

export default PulsaBotones;