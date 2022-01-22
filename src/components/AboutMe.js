import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Cardgroup from "react-bootstrap/CardGroup";
import CardGroup from "react-bootstrap/CardGroup";

function AboutMe() {
    return (
      <div>
        <Container fluid>
            <Row>
                <Card style={{marginTop:"5%",backgroundColor:"#12121C"}}>
                    <Card.Img variant="top" src="AboutHero.png" />
                </Card>
            </Row>
            <Row style={{backgroundColor:"#12121C",textAlign:"center"}}>
                    <p style={{fontWeight:"700",fontSize:"40px",lineHeight:"48px",color:"white"}}>What makes me who I am.</p>
                    <p style={{fontWeight:"400",fontSize:"14px",lineHeight:"24px",color:"#88888D"}}>"If you work on yourself first, as Faraday did, developing a solid work ethic and organizational skills, eventually the right teacher will appear in your life".</p>
            </Row>
            <Row style={{padding:"2%"}}>
                <CardGroup>
                    <Card style={{backgroundColor:"#12121C"}}>
                        <Card.Img src="ACard1.png"></Card.Img>
                    </Card>
                    <Card style={{backgroundColor:"#12121C"}}>
                        <Card.Img src="ACard2.png"></Card.Img>
                    </Card>
                    <Card style={{backgroundColor:"#12121C"}}>
                        <Card.Img src="ACard3.png"></Card.Img>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card style={{backgroundColor:"#12121C"}}>
                        <Card.Img src="ACard4.png"></Card.Img>
                    </Card>
                    <Card style={{backgroundColor:"#12121C"}}> 
                        <Card.Img src="ACard5.png"></Card.Img>
                    </Card>
                    <Card style={{backgroundColor:"#12121C"}}>
                        <Card.Img src="ACard6.png"></Card.Img>
                    </Card>
                </CardGroup>
            </Row>
            <Row style={{padding:"5%"}}>
                <CardGroup style={{gap:"2%"}}>
                    <Card style={{backgroundColor:"#12121C"}}>
                        <Card.Img src="A2Card1.png"></Card.Img>
                    </Card>
                    <Card style={{backgroundColor:"#12121C"}}>
                        <Card.Img src="A2Card2.png"></Card.Img>
                    </Card>
                    <Card style={{backgroundColor:"#12121C"}}>
                        <Card.Img src="A2Card3.png"></Card.Img>
                    </Card>
                </CardGroup>
            </Row>
            <Row style={{marginTop:"5%",padding:"5%"}}>
                <Col xs={12} md={8}>
                    <h1 style={{fontWeight:"700",fontSize:"48px",lineHeight:"56px",color:"white"}}>Companies I have worked with.</h1>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#88888D",marginRight:"10%"}}>This means that you move toward challenges that will toughen and improve you, where you will get the most objective feedback on your performance and progress. You do not choose apprenticeships that seem easy and comfortable.</p>
                    <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#88888D",display:'flex',alignContent:'flex-end'}}>One can have no smaller or greater mastery than mastery of oneself.</p>
                </Col>
                <Col xs={12} md={4}>
                    <Cardgroup>
                        <Card.Img variant="top" src="AB1.png" />
                        <br></br>
                        <Card.Img variant="top" src="AB2.png" />
                        <br></br>
                        <Card.Img variant="top" src="AB3.png" />
                        <br></br>
                        <Card.Img variant="top" src="AB4.png" />
                        <br></br>
                        <Card.Img variant="top" src="AB5.png" />
                    </Cardgroup>
                </Col>
              </Row>
        </Container>
      </div>
    );
  }
  
  export default AboutMe;