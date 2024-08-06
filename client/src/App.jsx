import { Routes, Route } from "react-router-dom";


import Home from "./components/home/Home"
import Navigation from "./components/navigation/Navigation";
import ScrollToPlace from "./components/ScrollToPlace";
import CreateFlower from "./components/create-flower/CreateFlower";
import FlowerDetails from "./components/details-flower/DetailsFlower";
import LoginNew from "./components/login/LoginNew";
import RegisterNew from "./components/register/RegisterNew";

function App() {

  return (
    <>
      <ScrollToPlace />

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<RegisterNew />} />

        <Route path="/login" element={<LoginNew />} />

        <Route path="/create/flower" element={<CreateFlower />} />

        {/* <Route path="/flower/:flowerId/details" element={<FlowerDetails />} /> */}
      </Routes>
    </>
  )
}

export default App
