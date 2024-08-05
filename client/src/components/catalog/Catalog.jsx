import { useEffect, useState } from "react"

import style from "./Catalog.module.css";

import * as flowerAPI from "../api/flower-api";

import FlowerListItem from "./flower-list-item/FlowerListItem";

export default function Catalog() {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        flowerAPI.getAll()
            .then(result => setFlowers(result));
    }, []);

    // const firstFiveFlowers = flowers.slice(0, 5).map(flower => {
    //     return <myview item={i} key={i.id} />
    // });

    // useEffect(() => {
    //     flowerAPI.getFirstFive()
    //         .then(result =>
    //             setFlowers(result)
    //             // console.log(result)
    //         );

    // }, []);


    return (
        <>

            <section className="gallery-section section parallax-window" data-parallax="scroll" data-image-src="img/section-3-bg.jpg" id="section-3" data-scroll-index='2'>
                <div className="container">
                    <div className="title text-center">
                        <h2>Our Gallery</h2>
                    </div>
                    <div className="mx-auto gallery-slider">

                        {/* {flowers.length > 0 */}
                            // ?
                        {flowers.map(flower => <FlowerListItem key={flower._id} {...flower} />)}
                        {/* // : <p>No flowers yet</p> */}
                        {/* // } */}

                    </div>
                </div>
            </section>

        </>
    )
}



