export default function Footer() {
    return (
        <>
            <section className="contact-section section" id="section-4">
                <div className="container">
                    <div className="title">
                        <h3>Contact Us</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-6 mb-4 contact-form">
                            <div className="form tm-contact-item-inner">
                                <form action="#" method="POST">
                                    <div className="form-group">
                                        <input name="name" type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <input name="email" type="text" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" className="textarea form-control" placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-group text-right">
                                        <input type="submit" className="btn btn-primary" value="Send it" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 contact-details">
                            <div className="tm-contact-item-inner-2">
                                <p>Nam mollis felis elementum, placerat dolor id, vehicula libero. Etiam dui nisl, mattis ut rhoncus et, cursus ut diam.</p>
                                <ul className="font-weight-light">
                                    <li>
                                        <span className="icn"><i className="fas fa-mobile-alt"></i></span>
                                        <span className="lbl">Tel:</span> <a href="#">010-020-0340</a>
                                    </li>
                                    <li>
                                        <span className="icn"><i className="fas fa-at"></i></span>
                                        <span className="lbl">Email:</span> <a href="#">info@company.com</a>
                                    </li>
                                    <li>
                                        <span className="icn"><i className="fas fa-globe-asia"></i></span>
                                        <span className="lbl">URL:</span> <a href="#">www.company.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 map">

                            {/* <!-- Map --> */}
                            <div className="map-outer tm-mb-40">
                                <div className="gmap-canvas">
                                    <iframe width="100%" height="400" id="gmap-canvas"
                                        src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer container container-2">
                    <div className="row">
                        <p className="col-sm-7">Copyright 2021 Simply Amazed Co.</p>
                        <p className="col-sm-5 text-right design">Design: <a rel="nofollow" href="https://www.tooplate.com" target="_parent">Tooplate</a></p>
                    </div>
                </footer>
            </section>
        </>
    )
}