import Navigation from "../navigation/Navigation"
import Banner from "../banner/Banner"
import Info from "../info/Info"
import Catalog from "../catalog/Catalog"
import Footer from "../footer/Footer"
import Button from "../../../Button"
import CreateFlower from "../create-flower/CreateFlower"

export default function Home() {
    return (
        <>
            {/* <Navigation /> */}

            <Banner />

            <Info />

            <Catalog />

            <CreateFlower />

            <Footer />

            <Button />
        </>
    )
}