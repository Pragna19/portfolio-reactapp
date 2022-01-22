import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Header() {
    return (
      <div>
        <Navbar variant="dark" style={{margin:"0%",padding:"2%"}}>
            <Container fluid >
            <Navbar.Brand href="#home">Pragna</Navbar.Brand>
            <Nav style={{justifyContent:"flex-end"}}>
              <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/AboutMe">About me</Nav.Link>
              <Nav.Link href="/Blog">Blog</Nav.Link>
              <Nav.Link href="/GetTemplate">Get Template</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
      </div>
    );
  }
  
  export default Header;