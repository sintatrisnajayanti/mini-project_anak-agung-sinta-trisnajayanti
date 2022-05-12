import { Button } from "@mui/material";
import React from "react";

export default function BodyAbout() {
  return (
    <div
      style={{
        textAlign: "left",
        top: "100px",
        left: "200px",
        position: "absolute",
      }}
    >
      <p
        style={{
          fontFamily: "montserrat",
          fontSize: "48px",
          fontWeight: "bold",
          width: "677px",
        }}
      >
        OUR OLSHOP
      </p>
      <p
        style={{
          color: "black",
          fontSize: "20px",
          width: "509px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        tristique, dui ut molestie egestas, magna. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam tristique, dui ut molestie egestas,
        magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        tristique, dui ut molestie egestas, magna.
      </p>

      <Button
        variant="outlined"
        style={{
          textTransform: "none",
          fontFamily: "montserrat",
          color: "black",
          border: "2px solid black",
          borderRadius: "180px",
        }}
        href={"/collection"}
      >
        {"Let's Go"}
      </Button>

      <Button
        style={{
          textTransform: "none",
          fontFamily: "montserrat",
          top: "auto",
          position: "relative",
          color: "white",
          left: "20px",
          backgroundColor: "black",
          borderRadius: "180px",
        }}
        href="#bottom"
      >
        {"Contact Us"}
      </Button>
    </div>
  );
}
