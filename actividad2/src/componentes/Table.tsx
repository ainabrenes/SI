import React from 'react';
import {fila} from './lista';
import Row from './Row';
function Table(){
    
    
    return<>
    <table className="tabla">
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Tienda</th>
          <th>Notas</th>
          <th>Comprado</th>
          <th>Imagen</th>
        </tr>

        <tbody>
        {fila.map((item, index) => (
          <Row key={index} fila={item} />
        ))}
      </tbody>
    </table></>;

}
export default Table;