import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import styles from "./Navigations.module.css"

import Info from "../info/Info";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


function Navigation() {

  const { isAuthenticated, email } = useContext(AuthContext);

  return (
    <Navbar className={styles.navMain} fixed='top'>
      <Container>
        <Navbar.Brand as={Link} to="/" data-scroll-goto="0">Home</Navbar.Brand>
        <Nav.Link as={Link} to="/" className='text-muted' data-scroll-goto="2">Flowers</Nav.Link>
        <Nav.Link as={Link} to="/" className='text-muted' data-scroll-goto="4">About Us</Nav.Link>
        {!isAuthenticated
          ? (
            <Navbar className={styles.muted}>
              <Nav.Link as={Link} to="/register" className='text-muted'>Register</Nav.Link>
              <Nav.Link as={Link} to="/login" className='text-muted'>Login</Nav.Link>
            </Navbar>
          )
          : (
            <Navbar className={styles.muted}>
              <Nav.Link as={Link} to="/create" className='text-muted'>Add Flower</Nav.Link>
              <Nav.Link as={Link} to="/logout" className='text-muted'>Logout</Nav.Link>
              <Navbar className="justify-content-end">
                <Navbar.Text className={styles.signedIn}>
                  Signed in as: <span className={`${styles.user}`}>{email}</span>
                </Navbar.Text>
              </Navbar>
            </Navbar>
          )
        }


      </Container>
    </Navbar>
  );
}

export default Navigation;