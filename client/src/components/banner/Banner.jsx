import styles from "./Banner.module.css";
import Card from 'react-bootstrap/Card';

export default function Banner() {
    return (
        <>
            <div className="banner-section section parallax-window" data-parallax="scroll" data-image-src="img/section-1-bg.jpg" id="section-1">
                <div className="container">
                    <div className="item">
                        {/* <div className="bg-blue-transparent logo-fa">
                            <span className={styles.logo}></span>
                            The Silver Flower
                        </div> */}
                        <div className={styles.left}>
                            <img src="../../../img/icon-flower.jpg" alt="Flower" />
                            <p>The Silver Flower</p>
                        </div>
                        {/* <div className="bg-blue-transparent simple"><p>Your most trusted flower shop!</p></div> */}
                        <div className={styles.right}>
                            <p>
                                Your most trusted flower shop!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

//fas fa-2x fa-atom

// className="bg-blue-transparent logo-fa"><span><i className="bi bi-flower1"