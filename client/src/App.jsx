import { Routes, Route, ScrollRestoration } from "react-router-dom";


import Home from "./components/home/Home"
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import Banner from "./components/banner/Banner";
import Info from "./components/info/Info";
import Catalog from "./components/catalog/Catalog";
import Button from "./components/Button";
import ScrollToPlace from "./components/ScrollToPlace";

function App() {

  return (
    <>
      <ScrollToPlace />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Navigation />} />
        <Route path="/" element={<Banner />} />
        <Route path="/" element={<Info />} />
        <Route path="/" element={<Catalog />} />
        <Route path="/" element={<Footer />} /> */}
        {/* <Route path="/games/create" element={<Button />} /> */}
      </Routes>
    </>
  )
}

export default App
