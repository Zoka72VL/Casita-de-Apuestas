import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <section1 >
                <container>
                <h2 className="content-counter">{counter}</h2>
                </container>
            </section1>
            <section2 className="section-counter-button  buttons-wrapper ">
                        <button className="custom-border-btn" onClick={() => {setCounter(counter + 1)}} >Aumentar</button>           
                        <button className="custom-border-btn" onClick={() =>{setCounter(counter - 1)}}  >Disminuir</button>
                        <button className="custom-border-btn" onClick={() =>{setCounter(0)}} >Resetear</button>
            </section2>
        </>
    );
} ;

export default Counter;