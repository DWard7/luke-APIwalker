import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function OneStarship() {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/${id}`)
      .then((res) => {
        console.log(res.data);
        setStarship(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="card">
      {starship && (
        <div className="card-body">
          <h1>{starship.name}</h1>
            <p><b>Passengers:</b> {starship.passengers}</p>
            <p><b>Crew:</b> {starship.crew}</p>
            <p><b>Cargo Capacity:</b> {starship.cargo_capacity}</p>
            <p><b>Hyperdrive Rating:</b> {starship.hyperdrive_rating}</p>
        </div>
      )}
    </div>
  );
}

export default OneStarship;
