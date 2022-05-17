import { Button, useMediaQuery } from "@mui/material";
import React from "react";

export default function BodyAbout() {
  const versiHP = useMediaQuery("(max-width:600px)");

  return (
    <div
      style={{
        textAlign: "left",
        top: "150px",
        left: versiHP ? "50px" : "200px",
        position: "absolute",
        width: "100vw",
        height: "100vh",
      }}
    >
      <p
        style={{
          fontFamily: "montserrat",
          fontSize: versiHP ? "40px" : "48px",
          fontWeight: "bold",
          width: versiHP ? "450px" : "677px",
        }}
      >
        OUR STORE
      </p>
      <p
        style={{
          color: "black",
          fontSize: versiHP ? "16px" : "20px",
          width: versiHP ? "400px" : "509px",
        }}
      >
        Brother and Sister Store (BnS Store) merupakan salah satu usaha toko
        pakaian milik anak muda asli Bali yang berada di daerah Denpasar. Bns
        Store ini berdiri sejak tahun 2012 berfokus pada fashion pria dan wanita
        seperti baju kaos polos, kemeja, polo, garment, dll. Kami juga
        menyediakan jasa sablon dan bordir.
      </p>

      <Button
        variant="outlined"
        style={{
          marginLeft: versiHP ? "90px" : "",
          textTransform: "none",
          fontFamily: "montserrat",
          color: "black",
          border: "2px solid black",
          borderRadius: "180px",
          top: versiHP ? "20px" : "",
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
          top: versiHP ? "20px" : "",
        }}
        href="#bottom"
      >
        {"Contact Us"}
      </Button>
    </div>
  );
}
