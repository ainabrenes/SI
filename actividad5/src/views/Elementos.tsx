import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";


interface Root {
  nombre: string
  id: number
  disponible: boolean
  imagen?: string
  imagenURL?: string
}

const instrumentos: Root[]=[
            {
                "nombre": "Piano",
                "id": 1,
                "disponible": true,
                "imagen": "https://hinves.com/wp-content/uploads/2013/05/boston-gp178-negro.jpg"
            },
            {
                "nombre": "Guitarra",
                "id": 2,
                "disponible": false,
                "imagenURL": "https://guitarrasbros.com/public/images/brosguitar002-22-1-1659527214.jpg"
            },
            {
                "nombre": "Bateria",
                "id": 3,
                "disponible": true,
                "imagenURL": "https://media.istockphoto.com/id/174921468/es/foto/tambores.jpg?s=612x612&w=0&k=20&c=gl9F2p7NuvYxPOeLqyDqcv51ZsueBRs5DVJXQMSzIMU="
            },
            {
                "nombre": "Flauta",
                "id": 4,
                "disponible": true,
                "imagenURL": "https://dam.elcorteingles.es/producto/www-0400912603199-00.jpg?impolicy=Resize&width=640&height=640"
            },
            {
                "nombre": "Arpa",
                "id": 5,
                "disponible": false,
                "imagenURL": "https://musicaladn.com/145758/arpa-salvi-pedal-daphne-47ex-caoba.jpg"
            }
        ];
export default function Tiendas(){
    return (
        {instrumentos.map(tienda=>(
            {instrumento.nombre} 
        )   })
}
    return (
        instrumentos.map(instrumento=>(
            {instrumento.nombre}
        ))
        <div>
          <h1>Instrumentos</h1>
          <div className="instrumentos-list">
            {instrumentos.map((instrumento) => (
              <div key={instrumento.id} className="card">
                <img src={instrumento.imagen || instrumento.imagenURL} alt={instrumento.nombre} />
                <div className="card-body">
                  <h5 className="card-title">{instrumento.nombre}</h5>
                  <p className="card-text">Disponible: {instrumento.disponible ? "Sí" : "No"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}