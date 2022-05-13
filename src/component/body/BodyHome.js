import { useMediaQuery } from "@mui/material";
import { padding } from "@mui/system";
import React from "react";

export default function BodyHome() {
  const versiHP = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <div
        style={{
          textAlign: versiHP ? "center" : "left",
          top: versiHP ? "100px" : "200px",
          left: versiHP ? "" : "215px",
          position: versiHP ? "relative" : "absolute",
        }}
      >
        <p
          style={{
            fontFamily: "montserrat",
            fontSize: versiHP ? "30px" : "48px",
            fontWeight: "bold",
            width: versiHP ? "500px" : "677px",
          }}
        >
          NEW GENERATION SHOP EXPERIENCES FOR YOU
        </p>
        <p
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "33px",
            fontSize: versiHP ? "14px" : "20px",
            width: versiHP ? "450px" : "575px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tristique, dui ut molestie egestas, magna.
        </p>
      </div>
      {!versiHP && (
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
      )}
    </div>
  );
}
