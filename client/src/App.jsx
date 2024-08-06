import { Routes, Route } from "react-router-dom";


import Home from "./components/home/Home"
import Navigation from "./components/navigation/Navigation";
import ScrollToPlace from "./components/ScrollToPlace";
import Register from "./components/register/Register";
import CreateFlower from "./components/create-flower/CreateFlower";
// import Login from "./components/login/Login";
import FlowerDetails from "./components/details-flower/DetailsFlower";
import Login2 from "./components/login/Login2.jsx";

function App() {

  return (
    <>

      <ScrollToPlace />

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login2 />} />

        {/* <Route path="/create/flower" element={<CreateFlower />} /> */}

        {/* <Route path="/flower/:flowerId" element={<FlowerDetails />} /> */}
      </Routes>
    </>
  )
}

export default App
