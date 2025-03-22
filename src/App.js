import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Bovino from './components/pages/Bovino'
import Ave from './components/pages/Ave'
import Suino from './components/pages/Suino'
import Pescado from './components/pages/Pescado'
import Carrinho from "./components/pages/Carrinho";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/bovinos" element={<Bovino/>}></Route>
        <Route path="/aves" element={<Ave/>}></Route>
        <Route path="/suinos" element={<Suino/>}></Route>
        <Route path="/pescados" element={<Pescado/>}></Route>
        <Route path="/carrinho" element={<Carrinho/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
