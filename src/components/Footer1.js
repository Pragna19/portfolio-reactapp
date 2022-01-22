import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

function Footer1() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col xs={12} md={6} style={{marginTop:"2%",padding:"4%"}}>
              <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#88888D"}}>If we keep practicing, we gain fluency; basic skills are mastered, allowing us to take on newer and more exciting challenges</p>
              <br></br>
              <Button>Get in Touch</Button>
            </Col>
            <Col xs={12} md={6} style={{padding:"4%"}}>
              <h1 style={{fontWeight:"700",fontSize:"48px",lineHeight:"56px",color:"white"}}>How about we make something awesome together?</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default Footer1;