import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card"
import Cardgroup from "react-bootstrap/CardGroup"
import CardGroup from "react-bootstrap/CardGroup"
import { Button } from "react-bootstrap";

function MoreInfo() {
    return (
      <div>
          <Container style={{margin:"5%"}}>
              <Row>
                  <Col xs={12} md={6} style={{padding:"7%"}}>
                    <h1 style={{fontWeight:"700",fontSize:"48px",lineHeight:"56px",color:"white"}}>I build products for companies & startups.</h1>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#88888D"}}>Everything in nature has a structure, a way that the parts relate to one another, which is generally fluid and not so easy to conceptualize.</p>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#88888D"}}>Everything in nature has a structure, a way that the parts relate to one another, which is generally fluid and not so easy to conceptualize.</p>
                  </Col>
                  <Col xs={12} md={6} style={{padding:"7%"}}>
                    <Card.Img variant="top" src="textImage1.png" />
                  </Col>
              </Row>
              <Row style={{marginTop:"5%"}}>
                <Col xs={12} md={8}>
                    <h1 style={{fontWeight:"700",fontSize:"48px",lineHeight:"56px",color:"white"}}>What people say about me</h1>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#88888D",marginRight:"10%"}}>These steps are: Deep Observation (The Passive Mode), Skills Acquisition (The Practice Mode), and Experimentation (The Active Mode).</p>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#88888D",display:'flex',alignContent:'flex-end'}}>Empathy plays an enormous role in learning and knowledge</p>
                </Col>
                <Col xs={12} md={4}>
                    <Cardgroup>
                        <Card.Img variant="top" src="TCard1.png" />
                        <br></br>
                        <Card.Img variant="top" src="TCard2.png" />
                        <br></br>
                        <Card.Img variant="top" src="TCard3.png" />
                    </Cardgroup>
                </Col>
              </Row>
              <Row style={{marginTop:"10%"}}>
                <Col style={{padding:'1%'}} xs={12} md={6}>
                  <h1 style={{fontWeight:"700",fontSize:"43px",lineHeight:"56px",color:"white"}}>I've worked with more than 200 companies & startups around the world</h1>
                </Col>
                <Col xs={12} md={6}>
                  <Row style={{marginTop:"8%",marginLeft:"10%"}}>
                    <CardGroup style={{gap:"10%"}}>
                      <Col>
                        <Card  xs={12} md={12} lg={3} style={{backgroundColor:"#12121C"}}>
                          <Card.Title style={{fontWeight:"700",fontSize:"40px",lineHeight:"48px",color:"white"}}>50 %</Card.Title>
                          <Card.Text style={{fontWeight:"400",fontSize:"14px",lineHeight:"24px",color:"#88888D"}}>One repays a teacher badly if one remains only a pupil</Card.Text>
                        </Card>
                      </Col>
                      <Col>
                        <Card xs={12} md={12} lg={3} style={{backgroundColor:"#12121C"}}>
                          <Card.Title style={{fontWeight:"700",fontSize:"40px",lineHeight:"48px",color:"white"}}>90 %</Card.Title>
                          <Card.Text style={{fontWeight:"400",fontSize:"14px",lineHeight:"24px",color:"#88888D"}}>One repays a teacher badly if one remains only a pupil</Card.Text>
                        </Card>
                      </Col>
                    </CardGroup>
                  </Row>
                </Col>
              </Row>
              <Row style={{marginTop:"5%"}}>
                  <Col xs={12} md={6} style={{padding:"7%"}}>
                    <Card.Img variant="top" src="textImage2.png" />
                  </Col>
                  <Col xs={12} md={6} style={{padding:"2%",marginTop:"10%"}}>
                    <h1 style={{fontWeight:"700",fontSize:"48px",lineHeight:"56px",color:"white"}}>My main goal is to keep the customers satisfied.</h1>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#88888D"}}>Even with the skills that are primarily mental, such as computer programming or speaking a foreign language.</p>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#88888D"}}>It reamins the case that we learnt best through practice and repetiton-the natural learning process.</p>
                  </Col>
              </Row>
          </Container>
      </div>
    );
  }
  
  export default MoreInfo;
  