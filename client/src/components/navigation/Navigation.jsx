import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./Navigations.module.css"
import { Routes, Route } from "react-router-dom";

import Info from "../info/Info";


function Navigation() {
  return (
    <Navbar className={styles.navMain} fixed='top'>
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar className={styles.muted}>
          <Nav.Link href="#home" className='text-muted'>Flowers</Nav.Link>
          <Nav.Link href="#link" className='text-muted'>Register</Nav.Link>
          <Nav.Link href="#link" className='text-muted'>Login</Nav.Link>
          <Nav.Link href="/footer" className='text-muted'>About Us</Nav.Link>

          {/* Loged in */}
          {/* <Nav.Link href="#link" className='text-muted'>Add Product</Nav.Link>
          <Nav.Link href="#link" className='text-muted'>Logout</Nav.Link> */}
        </Navbar>
        <Navbar className="justify-content-end">
          <Navbar.Text className={styles.signedIn}>
            Signed in as: <a href="#login" className={`${styles.user}`}>Mark Otto</a>
          </Navbar.Text>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Navigation;