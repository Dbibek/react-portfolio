import React from "react";
import HeroImage from "../assets/heroImage1.jpg";
import { Card, Container } from "react-bootstrap";

const Hero = () => {
  return (
    <Container fluid>
      <Card
        className="mb-2 pt-4 alignitem-center"
        // style={{
        //   background: `url(${HeroImage})`,
        //   height: "40rem",
        //   width: "100%",
        //   margin: "auto",
        //   alignItems: "center",
        //   zIndex: -1,
        //   opacity: "30%",
        // }}
      >
        <Card.Img
          src={HeroImage}
          alt="Banner Image"
          style={{
            margin: "auto",
            alignItems: "center",
            height: "30rem",
            overflow: "hidden",
            objjectfit: "fill",
            zIndex: 1,
            opacity: "30%",
            position: "relative",
          }}
        ></Card.Img>
        <Card.Body
          style={{
            position: "absolute",
            fontSize: "2rem",
            fontWeight: "bold",
            zIndex: 1,
            justifyContent: "center",
            color: "black",
            textAlign: "center",
            top: "150px",
            left: "500px",
          }}
        >
          <Card.Header>Hello i am Bibek</Card.Header>
          <Card.Text>I am a software developer.</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Hero;
