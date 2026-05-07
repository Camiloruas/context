import "./App.css";
import { Alunos } from "./components/Alunos";
import { Footer } from "./components/Footer";
import UserProvider from "./contexts/user";

function App() {
  return (
    <UserProvider>
      <>
        <h1>Escola DEV</h1>
        <br />
        <hr />
        <Alunos />
        <Footer />
      </>
    </UserProvider>
  );
}

export default App;
