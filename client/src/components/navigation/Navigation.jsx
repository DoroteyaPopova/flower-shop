import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./Navigations.module.css"


function Navigation() {
  return (
    <Navbar className={`row ${styles.navMain}`} fixed='top'>
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav.Link href="#home">Flowers</Nav.Link>
        <Nav.Link href="#link">Something</Nav.Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className={`row ${styles.loggedUser}`}>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;