
import React from 'react';
import Card from 'react-bootstrap/Card';



const ImageCard = (props) => {

    

    return (

      <Card style={{ width: '18rem', height: "12rem" }}>
        <a href={ props.linkToFullImg } target="_blank"> <Card.Img variant="top" src={ props.imgURL } style={{ height: "12rem", boxShadow: "4px 4px 6px hsl(0, 0%, 70%)"}} /> </a>
      </Card>

    );
}


export default ImageCard;
