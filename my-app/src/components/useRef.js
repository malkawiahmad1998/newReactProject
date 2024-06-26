import React,{useRef} from "react";

const UseRefExample = ()=>{
    const inputRef = useRef(null);
    const focusInput = () =>{
        inputRef.current.focus();

    }

    return(
        <>
        <br></br>
        <br></br>

            <input type="text" placeholder="Focus Me" ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    )
}
export default UseRefExample;