import style from "./DetailsFlower.module.css"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { Link } from "react-router-dom"
import flowerAPI from "../api/flower-api.js";

export default function DetailsFlower() {
    const [flower, setFlower] = useState({});
    const { flowerId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await flowerAPI.getOne(flowerId);

            setFlower(result);
        })();
    }, []);


    return (
        <>
            <section className="contact-section section">
                <div className="container">
                    <div className="title">
                        <h3 className={style.name}>{flower.name}</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-6 mb-4 ">
                            <div className="form tm-contact-item-inner">
                                <form action="#" method="POST">
                                    <Container>
                                        <Row>
                                            <Col xs={15} md={15}>
                                                <Image src={flower.img} thumbnail />
                                            </Col>
                                        </Row>
                                    </Container>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 contact-details">
                            <div className="tm-contact-item-inner-2">
                                <span className={style.span}>Description:
                                    <p>{flower.description}</p>
                                </span>
                                <span className={style.span}>Difficulty:
                                    <p>{flower.difficulty}</p>
                                </span>
                                <span className={style.span}>Placement:
                                    <p>{flower.placement}</p>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 map">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

