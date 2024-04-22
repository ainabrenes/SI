import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


interface Root {
    nombre: string
    id: number
    disponible: boolean
    imagen?: string
    imagenURL?: string
}
export default function Tiendas() {
    const [instrumentos, setInstrumentos] = useState<Root[]>([]);


    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ainabrenes/SI/main/actividad5/src/views/data.json")
            .then((response) => response.json())
            .then((data: Root[]) => {
                setInstrumentos(data);
            });
    })

    return (
        <div>
            <h1>Productos</h1>
            {instrumentos.map(tienda => (
                <div>
                    {tienda.nombre}

                    <p>
                        <img src={tienda.imagenURL} width={75} height={75} />
                    </p>
                    <p>
                        {tienda.disponible? "Diponible":"No Disponible"}
                    </p>
                </div>
            )
            )
            }
        </div>
    );
}



