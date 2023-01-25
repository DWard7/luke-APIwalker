import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function OnePerson() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="card">
      {person && (
        <div className="card-body">
          <h1>{person.name}</h1>
            <p><b>Height:</b> {person.height}</p>
            <p><b>Mass:</b> {person.mass}</p>
            <p><b>Hair Color:</b> {person.hair_color}</p>
            <p><b>Skin Color:</b> {person.skin_color}</p>
        </div>
      )}
    </div>
  );
}

export default OnePerson;
