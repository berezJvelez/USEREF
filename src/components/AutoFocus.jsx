import { useRef } from "react";

const AutoFocus = () => {

    const inputRef = useRef();

    //ELEMENTOS DEL DOM
    function onFocus() {
        //elemento del DOM
        inputRef.current.focus();
        inputRef.current.style.border = '5px solid red'
    }//onFocus

    return (
        <>
        <br />
        <hr />
            <input type="text" ref= {inputRef} />
            <br />
            <button onClick={onFocus}>Escribe</button>
            <hr />
        </>
    );//return
}//AutoFocus

export default AutoFocus;