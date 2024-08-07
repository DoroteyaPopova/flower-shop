import { Routes, Route } from "react-router-dom";


import Home from "./components/home/Home"
import Navigation from "./components/navigation/Navigation";
import ScrollToPlace from "./components/ScrollToPlace";
import LoginNew from "./components/login/LoginNew";
import RegisterNew from "./components/register/RegisterNew";
import CreateFlowerNew from "./components/create-flower/CreateFlowerNew";
import DetailsFlower from "./components/details-flower/DetailsFlower";

function App() {

  return (
    <>
      <ScrollToPlace />

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<RegisterNew />} />

        <Route path="/login" element={<LoginNew />} />

        <Route path="/create" element={<CreateFlowerNew />} />

        <Route path="/flowers/:flowerId/description" element={<DetailsFlower />} />
      </Routes>
    </>
  )
}

export default App
