import { useState } from "react";
import "./App.css";
import { Alunos } from "./components/Alunos";

function App() {
  const [nome, setNome] = useState("Rafael Ruas");

  return (
    <>
      <h1>Escola DEV</h1>

      <br />
      <hr />
      <Alunos alunoNome={nome} changeName={(nome: string) => setNome(nome)} />
    </>
  );
}

export default App;
