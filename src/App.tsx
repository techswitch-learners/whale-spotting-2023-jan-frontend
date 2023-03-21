import './App.scss'
import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { Home } from "./components/Home/Home";

function App() {

  return (
    <>   
      <Home />
      <BackendConnectionChecker />

    </>
  )
}

export default App
