import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/views/data.json';

interface Element {
  nom: string;
  id: number;
  disponible: boolean;
  imatgeUrl: string;
}

const App: React.FC = () => {
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setElements(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h1>Elements</h1>
      <div className="row">
        {elements.map((element, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <img src={element.imatgeUrl} className="card-img-top" alt={element.nom} />
              <div className="card-body">
                <h5 className="card-title">{element.nom}</h5>
                <p className="card-text">ID: {element.id}</p>
                <p className="card-text">Disponible: {element.disponible ? 'Sí' : 'No'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;