import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from "./components/Registro";
import { useState } from "react";

const App = () => {
  const [alerta, setAlerta] = useState("");
  return <Registro />;
};

export default App;
