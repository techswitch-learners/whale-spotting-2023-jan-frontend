import './App.scss'
import { BackendConnectionChecker } from "./components/BackendConnectionChecker";

function App() {

  return (
    <>
      <img src="/logo.png" alt="The logo of the site: a cartoon whale, looking through a pair of binoculars." width="200" />
      <h1>Whale Spotting</h1>
      <BackendConnectionChecker />
    </>
  )
}

export default App
