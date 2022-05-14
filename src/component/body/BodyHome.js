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
          top: "200px",
          left: versiHP ? "" : "300px",
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
          BROTHER AND SISTER STORE GALERRY
        </p>
        <p
          style={{
            margin: versiHP ? "23px" : "",
            backgroundColor: "black",
            color: "white",
            padding: "33px",
            fontSize: versiHP ? "14px" : "20px",
            width: versiHP ? "450px" : "500px",
            textAlign: "center",
          }}
        >
          "Bahan Berkualitas Model Up To Date"
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
