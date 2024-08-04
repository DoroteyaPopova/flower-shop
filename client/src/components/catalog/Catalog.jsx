import { useEffect, useState } from "react"
import flowerAPI from "../api/flower-api";

export default function Catalog() {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        flowerAPI.getAll()
            .then(result => setFlowers(result));
    }, []);
    return (
        <>
            <section className="gallery-section section parallax-window" data-parallax="scroll" data-image-src="img/section-3-bg.jpg" id="section-3" data-scroll-index='2'>
                <div className="container">
                    <div className="title text-right">
                        <h2>Our Gallery</h2>
                    </div>
                    <div className="mx-auto gallery-slider">
                        <figure className="effect-julia item">
                            <img src="img/gallery-img-01.jpg" alt="Image" />
                            <figcaption>
                                <div>
                                    <p>Julia dances in the deep dark</p>
                                </div>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                        <figure className="effect-julia item">
                            <img src="img/gallery-img-02.jpg" alt="Image" />
                            <figcaption>
                                <div>
                                    <p>Julia dances in the deep dark</p>
                                </div>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                        <figure className="effect-julia item">
                            <img src="img/gallery-img-03.jpg" alt="Image" />
                            <figcaption>
                                <div>
                                    <p>Julia dances in the deep dark</p>
                                </div>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                        <figure className="effect-julia item">
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
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}