import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulario from "./components/Formulario";
import  Clientes from "./components/Clientes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Formulario />} />
          <Route exact path="/clientes" element={<Clientes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
