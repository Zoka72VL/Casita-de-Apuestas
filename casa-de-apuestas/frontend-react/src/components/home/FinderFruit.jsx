import { useState } from "react";



const fruits = ["naranja", "pera", "banana", "manzana"];

export const FinderFruit = () => {
    const [keySearch,setKeySearch] = useState("Aqui aparecera tu busqueda")
    const handleFinder = (event) =>{
        fruits.includes(event.target.value) ? setKeySearch((event.target.value)) : setKeySearch(("Aqui aparecera tu busqueda"))
    }
    return ( 
        <>
            <input onChange={handleFinder} placeholder="Ingresa tu busqueda" type="text"/>
            <h2>{keySearch}</h2>

        
        </>
     );
}
;