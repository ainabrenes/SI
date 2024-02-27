import React from 'react';
import {fila} from './lista';
import Row from './Row';
import Table from 'react-bootstrap/Table';
function Tabla(){
    
    
    return<>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Tienda</th>
          <th>Notas</th>
          <th>Comprado</th>
          <th>Imagen</th>
        </tr>
      </thead>
        <tbody>
        {fila.map((item, index) => (
          <Row key={index} fila={item} />
        ))}
      </tbody>
    </Table></>;

}
export default Tabla;