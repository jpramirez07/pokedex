import { HashRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Pokedex from "./components/Pokedex";
import PokemonDetail from "./components/PokemonDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";
import UserInput from "./components/UserInput";

function App() {

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserInput />} />

          <Route element={<ProtectedRoutes />} >
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
