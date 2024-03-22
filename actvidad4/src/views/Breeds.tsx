import React, { useEffect } from "react";
import { Container } from "react-dom";
import { Link } from "react-router-dom";
export type Breeds = Breed[]

export interface Breed{
    weight: Weight
    id: string
    name: string
    cfa_url?: string
    vetstreet_url: string
    vcahospitals_url?: string
    temperament: string
    origin: string
    country_codes: string
    country_code: string
    description: string
    life_span: string
    indoor: number
    lap?: number
    alt_names: string
    adaptability: number
    affection_level: number
    child_friendly: number
    dog_friendly: number
    energy_level: number
    grooming: number
    health_issues: number
    intelligence: number
    shedding_level: number
    social_needs: number
    stranger_friendly: number
    vocalisation: number
    experimental: number
    hairless: number
    natural: number
    rare: number
    rex: number
    suppressed_tail: number
    short_legs: number
    wikipedia_url: string
    hypoallergenic: number
    reference_image_id: string
    image: Image
}

export interface Weight {
    imperial: string
    metric: string
}

export interface Image {
    id: string
    width: number
    height: number
    url: string
}


export default function Razas() {



    const [razas, setRazas] = React.useState([] as Breeds);
    
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then((response) => response.json())
      .then((data: Breeds) => {
        setRazas(data);
      });
  }, []);

  return (
    <div>
      {razas.map((raza, i) => (
        <div key={i}>
          <Link to={`/razas/${raza.id}`}>{raza.name}</Link>
        </div>
      ))}
    </div>
  );
}