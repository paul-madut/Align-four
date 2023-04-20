import Login from "./components/Login/Login"
import Register from "./components/Login/Register";
import SinglePlayer from "./components/Game/SinglePlayer";
import LocalMultiPlayer from "./components/Game/LocalMultiPlayer";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
    <div >
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/single-player" element={<SinglePlayer/>}/>
        <Route path="/local" element={<LocalMultiPlayer/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App
