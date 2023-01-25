import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Form() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    resource: "people",
    id: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const {resource, id} = formState;
    navigate(`/${resource}/${id}`)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-between gap-2">
        <select
          name="resource"
          id="resource"
          className="form-select"
          value={formState.resource}
          onChange={handleChange}
        >
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
        </select>
        <input
          type="number"
          name="id"
          id="id"
          className="form-control"
          value={formState.id}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
