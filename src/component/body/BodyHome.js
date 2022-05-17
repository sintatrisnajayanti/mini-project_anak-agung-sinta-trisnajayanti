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
          left: versiHP ? "18px" : "300px",
          position: versiHP ? "relative" : "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <p
          style={{
            fontFamily: "montserrat",
            fontSize: versiHP ? "24px" : "48px",
            fontWeight: "bold",
            width: versiHP ? "450px" : "677px",
          }}
        >
          BROTHER AND SISTER STORE GALERRY
        </p>
        <p
          style={{
            margin: versiHP ? "23px" : "",
            backgroundColor: "black",
            color: "white",
            padding: versiHP ? "22px" : "33px",
            fontSize: versiHP ? "14px" : "20px",
            width: versiHP ? "420px" : "500px",
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
