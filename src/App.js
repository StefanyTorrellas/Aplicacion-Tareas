import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import { Route } from "wouter";
import ListadeTareas from "./componentes/ListadeTareas";
import Login from "./componentes/Login";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} className="freecodecamp-logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListadeTareas />
        <Route component={Login} path="/login" />
      </div>
    </div>
  );
}

export default App;
