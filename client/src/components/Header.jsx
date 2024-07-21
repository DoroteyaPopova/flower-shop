export default function Header() {
    return (
    <>
    <header className="header order-last" id="tm-header">
            <nav className="navbar">
                <div className="collapse navbar-collapse single-page-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#section-1"><span className="icn"><i className="fas fa-2x fa-air-freshener"></i></span> Our Company</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section-2"><span className="icn"><i className="fab fa-2x fa-battle-net"></i></span> Our Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section-3"><span className="icn"><i className="far fa-2x fa-images"></i></span> Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#section-4"><span className="icn"><i className="far fa-2x fa-comments"></i></span> Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
    )
}