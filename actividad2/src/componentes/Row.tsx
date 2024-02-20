import React from 'react';
interface Prompts{
        fila:{
            producto:String,
            cantidad:number,
            precio:number,
            tienda:String,
            notas:String,
            comprado:Boolean,
            imagen: String,
        }
    };
const Row: React.FC<Prompts> = ({ fila }) => {
        return (
            <tr>
              <td>{fila.producto}</td>
              <td>{fila.cantidad}</td>
              <td>{fila.precio}</td>
              <td>{fila.tienda}</td>
              <td>{fila.notas}</td>
              <td>{fila.comprado ? 'Sí' : 'No'}</td>
              <td>
                <img style={{ maxWidth: '100px', maxHeight: '100px' }} />
              </td>
            </tr>
          );
        
    }
export default Row;