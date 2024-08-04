import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import styles from "./Navigations.module.css"

import Info from "../info/Info";


function Navigation() {

  return (
    <Navbar className={styles.navMain} fixed='top'>
      <Container>
        <Navbar.Brand href="/" data-scroll-goto="0">Home</Navbar.Brand>
        <Navbar className={styles.muted}>
          <Nav.Link className='text-muted' data-scroll-goto="2">Flowers</Nav.Link>
          <Nav.Link href="#home" className='text-muted' data-scroll-goto="4">About Us</Nav.Link>
          <Nav.Link href="/register" className='text-muted'>Register</Nav.Link>
          <Nav.Link href="/login" className='text-muted'>Login</Nav.Link>

          {/* Loged in */}
          <Nav.Link href="/create-flower" className='text-muted' data-scroll-goto="3">Add Flower</Nav.Link>
          {/* <Nav.Link href="#link" className='text-muted'>Logout</Nav.Link> */}
        </Navbar>
        <Navbar className="justify-content-end">
          <Navbar.Text className={styles.signedIn}>
            Signed in as: <Link to="#login" className={`${styles.user}`}>Mark Otto</Link>
          </Navbar.Text>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Navigation;