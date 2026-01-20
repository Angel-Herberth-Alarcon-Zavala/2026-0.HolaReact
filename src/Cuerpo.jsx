import { useState } from "react"

function Cuerpo({nom, esMayorEdad}) {
    const [numClicks, setNumClicks] = useState(0)
    

    function OnClick() {
        setNumClicks(numClicks + 1)
    }

    return <div>
        <div>Hola React! { nom }</div>
        <p>Esto es un parrafo</p>
        <div>
            {
                esMayorEdad ? "Es mayor edad" : "NO es mayor edad"
            }
        </div>
        <div>
            { /* comentario */ }
            Cantidad de Clicks: { numClicks }
        </div>
        <button className="bg-gray-400 px-2 py-1 rounded-md" 
            type="button"
            onClick={ OnClick }>
            Click me!
        </button>
    </div> 
}

export default Cuerpo