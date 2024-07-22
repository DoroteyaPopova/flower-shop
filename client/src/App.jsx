import Banner from "./components/banner/Banner"
import Body from "./components/Body"
import Button from "./components/Button"
import Catalog from "./components/catalog/Catalog"
import Footer from "./components/footer/Footer"
import Header from "./components/Header"
import Info from "./components/info/Info"
import Navigation from "./components/navigation/Navigation"

function App() {

  return (
    <>
      {/* <Header /> */}

      <Navigation />

      <Banner/>

      <Info/>

      <Catalog/>

      <Footer/>

      {/* <Body /> */}

      <Button />
    </>
  )
}

export default App
