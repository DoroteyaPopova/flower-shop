import { Routes, Route } from "react-router-dom";


import Home from "./components/home/Home"
import Navigation from "./components/navigation/Navigation";
import ScrollToPlace from "./components/ScrollToPlace";
import Register from "./components/register/Register";
import CreateFlower from "./components/create-flower/CreateFlower";
import Login from "./components/login/Login";

function App() {

  return (
    <>

      <ScrollToPlace />

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/create/flower" element={<CreateFlower />} />

        <Route path="/flower/:flowerId" element={<CreateFlower />} />
      </Routes>
    </>
  )
}

export default App
