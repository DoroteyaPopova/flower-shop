import { useEffect, useState } from "react"
import PaginationFlower from "./pagination/Pagination";

import style from "./Catalog.module.css";

import * as flowerAPI from "../api/flower-api";
import FlowerListItem from "./flower-list-item/FlowerListItem";

export default function Catalog() {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        flowerAPI.getAll()
            .then(result => setFlowers(result));
    }, []);

    const firstFiveFlowers = flowers.slice(0, 5);

    return (
        <>
            <section className="gallery-section section parallax-window" data-parallax="scroll" data-image-src="img/section-3-bg.jpg" id="section-3" data-scroll-index='2'>
                <div className="container">
                    <div className="title text-center">
                        <h2>Our Flowers</h2>
                    </div>
                    <div className="mx-auto gallery-slider">
                    {/* <figure className="effect-julia item"> */}
                    {flowers.map(flower => <FlowerListItem key={flower._id} {...flower} />)}
                    {/* </figure> */}


                    {/* <figure className="effect-julia item">
                        </figure> */}


                    {/* <figure className="effect-julia item">
                            <img src="img/gallery-img-04.jpg" alt="Image" />
                            <figcaption>
                                <div>
                                    <p>Julia dances in the deep dark</p>
                                </div>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure> */}


                    {/* <figure className="effect-julia item">
                            <img src="img/gallery-img-04.jpg" alt="Image" />
                            <figcaption>
                                <div>
                                    <p>Julia dances in the deep dark</p>
                                </div>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                        <figure className="effect-julia item">
                            <img src="img/gallery-img-05.jpg" alt="Image" />
                            <figcaption>
                                <div>
                                    <p>Julia dances in the deep dark</p>
                                </div>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                        <figure className="effect-julia item">
                            <img src="img/gallery-img-06.jpg" alt="Image" />
                            <figcaption>
                                <div>
                                    <p>Julia dances in the deep dark</p>
                                </div>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                        <figure className="effect-julia item">
                            <img src="img/gallery-img-07.jpg" alt="Image" />
                            <figcaption>
                                <div>
                                    <p>Julia dances in the deep dark</p>
                                </div>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                        <figure className="effect-julia item">
                            <img src="img/gallery-img-08.jpg" alt="Image" />
                            <figcaption>
                                <div>
                                    <p>Julia dances in the deep dark</p>
                                </div>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                        <figure className="effect-julia item">
                            <img src="img/gallery-img-09.jpg" alt="Image" />
                            <figcaption>
                                <div>
                                    <p>Julia dances in the deep dark</p>
                                </div>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure> */}
                    </div>

                    {/* <div className={style.container}>
                        {flowers.map(flower => <FlowerListItem key={flower._id} {...flower} />)}
                    </div> */}
                </div>
            </section>
        </>
    )
}