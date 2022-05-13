import { Button } from "@mui/material";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarBootstrap() {
  const currentURL = window.location.href;
  console.log(currentURL);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" color="black">
        <Container>
          <a href="/">
            <img
              style={{ paddingLeft: "0px" }}
              src="/asset/logo/logo.png"
              alt="logo"
              height="100px"
            ></img>
          </a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav
              style={{
                fontSize: "14px",
                fontFamily: "montserrat",
                fontWeight: 700,
                textTransform: "none",
                paddingRight: "100px",
              }}
            >
              <Button
                style={{
                  textTransform: "none",
                  fontFamily: "montserrat",
                  top: "auto",
                  position: "relative",
                  color:
                    currentURL === "http://localhost:3000/" ? "gray" : "black",
                }}
                href="/"
              >
                Home
              </Button>

              <Button
                style={{
                  textTransform: "none",
                  fontFamily: "montserrat",
                  top: "auto",
                  position: "relative",
                  color:
                    currentURL === "http://localhost:3000/collection"
                      ? "gray"
                      : "black",
                }}
                href="/collection"
              >
                Collection
              </Button>
              <Button
                style={{
                  textTransform: "none",
                  fontFamily: "montserrat",
                  top: "auto",
                  position: "relative",
                  color:
                    currentURL === "http://localhost:3000/about"
                      ? "gray"
                      : "black",
                }}
                href="/about"
              >
                About
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
