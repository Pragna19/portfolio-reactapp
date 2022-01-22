import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

function Footer() {
    return (
      <div>
        <Container fluid>
          <Row style={{backgroundColor:"#222233"}}>
            <Row style={{backgroundColor:"#222233"}}>
                <img style={{backgroundColor:"#222233"}} src="Footer.png"></img>
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default Footer;