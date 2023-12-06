import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Spinner from "./Spinner";
import useClima from "../hooks/useClima"


function AppClima() {

    const { resultado, cargando, noResultado } = useClima();

    return (
        <main className="dos-columnas">
            <Formulario />
            { 
                cargando ? <Spinner /> : 
                resultado?.name ? <Resultado /> : 
                noResultado ? <p>{noResultado}</p> : <p>El resultado es</p>
            }

        </main>
    )
}

export default AppClima