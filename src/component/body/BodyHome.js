import { padding } from "@mui/system";
import React from "react";

export default function BodyHome() {
  return (
    <div>
      <div
        style={{
          textAlign: "left",
          top: "200px",
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
          NEW GENERATION SHOP EXPERIENCES FOR YOU
        </p>
        <p
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "33px",
            fontSize: "20px",
            width: "509px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tristique, dui ut molestie egestas, magna.
        </p>
      </div>

      <img
        src="/asset/homebody1.png"
        alt="gambar"
        style={{
          maxWidth: "40vw",
          position: "absolute",
          zIndex: "0",
          right: "102px",
          bottom: "0px",
        }}
      ></img>
    </div>
  );
}
