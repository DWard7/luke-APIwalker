import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import People from "./components/People";
import Planets from "./components/Planets";
import LukeApi from "./components/LukeApi";
import "./bootstrap.min.css"
import OnePerson from "./components/OnePerson";
import OnePlanet from "./components/OnePlanet";
import Starships from "./components/StarShips";
import OneStarship from "./components/OneStarship";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<LukeApi />}>
            <Route path="/people/" element={<People />} >
              <Route path=":id" element={<OnePerson />}/>
            </Route>
            <Route path="/planets" element={<Planets />} >
              <Route path=":id" element={<OnePlanet />}/>
            </Route>
            <Route path="/starships" element={<Starships />}>
              <Route path=":id" element={< OneStarship/>}/>
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
