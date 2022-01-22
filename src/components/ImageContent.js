import Card from "react-bootstrap/Card"

function ImageContent() {
    return (
      <div style={{margin:"5%"}}>
        <Card>
            <Card.Img variant="top" src="Image1.png" />
        </Card>
        <Card style={{marginTop:"5%"}}>
            <Card.Img variant="top" src="Image2.png" />
        </Card>
        <Card style={{marginTop:"5%"}}>
            <Card.Img variant="top" src="Image3.png" />
        </Card>
      </div>
    );
  }
  
  export default ImageContent;
  