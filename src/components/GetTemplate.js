import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function GetTemplate() {
    return (
      <div>
          <Container style={{padding:"10%",backgroundColor:"#1212C"}}>
              <Row>
                <img src="Template.png" style={{backgroundColor:'#12121C'}}></img>
              </Row>
              <br></br>
              <Row>
                <h1 style={{fontWeight:"700",fontSize:"48px",lineHeight:"56px",color:"white"}}>Find tips about the best design practices</h1>
              </Row>
              <Row>
                <p style={{fontSize:"14px",fontWeight:"400",lineHeight:"24px",color:"#88888D"}}>Sep 25,2021</p>
              </Row>
              <br></br>
              <Row>
                <p style={{fontSize:"24px",fontWeight:"400",lineHeight:"32px",color:"#88888D"}}>Think of it this way: There are two kinds of failure. The first comes from never trying out your ideas because you are afraid, or because you are waiting for the perfect time. This kind of failure you can never learn from, and such timidity will destroy you. The second kind comes from a bold and venturesome spirit.</p>
                <p style={{fontSize:"24px",fontWeight:"400",lineHeight:"32px",color:"#88888D"}}>If you fail in this way, the hit that you take to your reputation is greatly outweighed by what you learn. Repeated failure will toughen your spirit and show you with absolute clarity how things must be done.</p>
                <p style={{fontSize:"24px",fontWeight:"400",lineHeight:"32px",color:"#88888D"}}>In the future, the great division will be between those who have trained themselves to handle these complexities and those are overwhelmed by them -- those who can acquire skills and discipline their minds and those who are irrevocably distracted by all the media around them and can enver focus enough to learn.</p>
                <p style={{fontSize:"24px",fontWeight:"400",lineHeight:"32px",color:"#88888D"}}>We are all in search of feeling more connected to reality -- to other people, the times we live in, the natural world, our charecter, our own uniqueness. Our culture increasingly tends to separate us from these realities in various ways.</p>
                <p style={{fontSize:"24px",fontWeight:"400",lineHeight:"32px",color:"#88888D"}}>We indulge in drugs or alcohol, or engage in dangerous sports or risky behavior, just to wake ourselves up from the sleep of our daily existence and feel a heightened sense of connection of reality. In the end, however, the most satisfying and powerful way to feel this connection is through creative activity.</p>
                <p style={{fontSize:"24px",fontWeight:"400",lineHeight:"32px",color:"#88888D"}}>Engaged in the creative process we feel more alive than ever, because we are making something and not merely consuming, Masters of the small reality we create. In doing this work, we are in fact creating ourselves.</p>
              </Row>
              <br></br>
              <Row lg={6} md={4} xs={2}>
                  <Button >Go Back</Button>
              </Row>
          </Container>
      </div>
    );
  }
  
  export default GetTemplate;