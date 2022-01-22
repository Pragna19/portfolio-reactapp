import Container from "react-bootstrap/esm/Container"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"

function description() {
    return (
      <div>
          <Container fluid style={{padding:"5%"}}>
                <h1 style={{fontWeight:"700",fontSize:"72px",lineHeight:"86px",color:"white"}}>Digital <span style={{color:"grey"}}>Product </span>Designer</h1>
                <h8 style={{fontSize:"24px",fontWeight:"400",lineHeight:"32px",color:"grey"}}>I am Portier, experienced Digital Product Designer based on Florida</h8>
                <br></br>
                <h8 style={{fontSize:"24px",fontWeight:"400",lineHeight:"32px",color:"grey"}}>I am here to help you build your amazing product.</h8>
                <br></br>
                <br></br>
                <Button style={{marginTop:"1%"}}>Hire me</Button>
                <CardGroup style={{margin:"5%"}}>
                  <Card style={{backgroundColor:"#12121C"}}>
                    <Card.Img variant="top" src="card1.png" /></Card>
                  <Card style={{backgroundColor:"#12121C"}}>
                    <Card.Img variant="top" src="card2.png" /> </Card>
                  <Card style={{backgroundColor:"#12121C"}}>
                    <Card.Img variant="top" src="card3.png" /></Card>
                </CardGroup>
          </Container>
      </div>
    );
  }
  
  export default description;