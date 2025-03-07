import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <section1 className="section-counter">
                <h2 className="content-counter">{counter}</h2>
                <hr/>
            </section1>
            <section2 className="section-counter-button ">
                    <div className="custom-border-btn buttons-wrapper ">
                        <button onClick={() => {setCounter(counter + 1)}} >Aumentar</button>
                    </div>
            </section2>
                    <div>
                        <button >Resetear</button>
                        <button >Disminuir</button>
                    </div>
        </>
    );
} ;

export default Counter;