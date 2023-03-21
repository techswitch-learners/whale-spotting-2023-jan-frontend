import './App.css'
import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { Footer } from './components/Footer';

function App() {
  

  return (
    <>
      <img src="/logo.png" alt="The logo of the site: a cartoon whale, looking through a pair of binoculars." width="200" />
      <h1>Whale Spotting</h1>
      
      <BackendConnectionChecker />
      <Footer />
    </>
  )
}

export default App
