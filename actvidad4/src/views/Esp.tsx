import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


interface Breed {
  weight: Weight;
  id: string;
  name: string;
  cfa_url?: string;
  vetstreet_url: string;
  vcahospitals_url?: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap?: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
  image: Image;
}

interface Weight {
  imperial: string;
  metric: string;
}

interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
}

const DetallesRaza: React.FC = () => {
  const [raza, setRaza] = useState<Breed | null>(null);
  const { id } = useParams<{ id: string }>();
  

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/${id}`)
      .then((response) => response.json())
      .then((data: Breed) => {
        setRaza(data);
      });
  }, [id]);

  

  if (!raza) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
    
      <h2>{raza.name}</h2>
      <p>{raza.description}</p>
    </div>
  );
}

export default DetallesRaza;
