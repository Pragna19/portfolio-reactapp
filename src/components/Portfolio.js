import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function Portfolio() {
    return (
      <div>
        <Container fluid>  
            <Row>
                <Row style={{padding:"3%"}}>
                    <Col  md={8} xs={12}>
                        <Card  style={{backgroundColor:"#12121C"}}>
                            <Card.Text style={{fontWeight:"700",fontSize:"72px",lineHeight:"86px",color:"white"}}>
                                I love <span style={{color:"grey"}}>what I do </span>And I make sure I do great.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} style={{padding:"3%"}}>
                    <Button>Veiw My Work</Button>
                  </Col>
                  <Col xs={12} md={6} style={{padding:"3%"}}>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#88888D"}}>I am Portier, experienced Digital Product Designer based on Florida. I am here to help you build your amazing product.</p>
                  </Col>
                </Row>
                <br></br>             
            </Row>
        </Container>
        <br></br>
      </div>
    );
  }
  
  export default Portfolio;