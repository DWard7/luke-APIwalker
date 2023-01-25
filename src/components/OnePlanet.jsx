import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function OnePlanet() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((res) => {
        console.log(res.data);
        setPlanet(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="card">
      {planet && (
        <div className="card-body">
          <h1>{planet.name}</h1>
            <p><b>Climate:</b> {planet.climate}</p>
            <p><b>Terrain:</b> {planet.terrain}</p>
            <p><b>Surface Water:</b> {planet.surface_water}</p>
            <p><b>Population:</b> {planet.population}</p>
        </div>
      )}
    </div>
  );
}

export default OnePlanet;
