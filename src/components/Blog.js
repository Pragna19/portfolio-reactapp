import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormContext";

function Blog() {
    return (
      <div>
        <Container fluid>
                <Row style={{padding:"3%"}}>
                    <Card  style={{backgroundColor:"#12121C",padding:"5%"}}>
                        <Card.Text style={{fontWeight:"700",fontSize:"70px",lineHeight:"86px",color:"white",textAlign:"center"}}>
                            Find designs about the best design practices
                        </Card.Text>
                        <Card.Text style={{fontWeight:"400",fontSize:"24px",lineHeight:"32px",color:"#88888D",textAlign:"center"}}>
                            Everything in nature has a structure, a way that the parts relate to one another, which is generally fluid and not so easy to conceptualize.
                        </Card.Text>
                    </Card>
                </Row>
                <Row >
                    <Col>
                        {/* <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                            Button
                            </Button>
                        </InputGroup> */}
                    </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6} style={{padding:"5%"}}>
                    <Card.Img variant="top" src="Rectangle1.png" />
                  </Col>
                  <Col xs={12} md={6} style={{padding:"5%",marginTop:"3%"}}>
                    <h1 style={{fontWeight:"700",fontSize:"32px",lineHeight:"40px",color:"white"}}>Free fonts alternatives: The ultimate guide</h1>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#88888D"}}>You must engrave deeply in your mind and never forget: your emotional commitment to what you are doing will be translated into your work.</p>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#006ADA"}}>Read full post -></p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6} style={{padding:"5%"}}>
                    <Card.Img variant="top" src="Rectangle2.png" />
                  </Col>
                  <Col xs={12} md={6} style={{padding:"5%",marginTop:"3%"}}>
                    <h1 style={{fontWeight:"700",fontSize:"32px",lineHeight:"40px",color:"white"}}>How to design an app from scrach</h1>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#88888D"}}>You must engrave deeply in your mind and never forget: your emotional commitment to what you are doing will be translated into your work.</p>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#006ADA"}}>Read full post -></p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6} style={{padding:"5%"}}>
                    <Card.Img variant="top" src="Rectangle3.png" />
                  </Col>
                  <Col xs={12} md={6} style={{padding:"5%",marginTop:"3%"}}>
                    <h1 style={{fontWeight:"700",fontSize:"32px",lineHeight:"40px",color:"white"}}>100 things a UI-UX Designer should know</h1>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#88888D"}}>You must engrave deeply in your mind and never forget: your emotional commitment to what you are doing will be translated into your work.</p>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#006ADA"}}>Read full post -></p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6} style={{padding:"5%"}}>
                    <Card.Img variant="top" src="Rectangle1.png" />
                  </Col>
                  <Col xs={12} md={6} style={{padding:"5%",marginTop:"3%"}}>
                    <h1 style={{fontWeight:"700",fontSize:"32px",lineHeight:"40px",color:"white"}}>4 rules for intuitive UX</h1>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#88888D"}}>You must engrave deeply in your mind and never forget: your emotional commitment to what you are doing will be translated into your work.</p>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#006ADA"}}>Read full post -></p>
                  </Col>
                </Row>
        </Container>
      </div>
    );
  }
  
  export default Blog;