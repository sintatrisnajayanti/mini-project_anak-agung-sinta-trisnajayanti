import { Button } from "@mui/material";
import React from "react";

export default function BodyDetail() {
  return (
    <div
      style={{
        textAlign: "left",
        maxWidth: "100vw",
      }}
    >
      <p
        style={{
          color: "black",
          fontSize: "20px",
          border: "2px solid black",
          borderRadius: "10px",
          padding: "5px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        tristique, dui ut molestie egestas, magna. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam tristique, dui ut molestie egestas,
        magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        tristique, dui ut molestie egestas, magna.
      </p>

      <p
        style={{
          color: "black",
          fontSize: "20px",
          border: "2px solid black",
          borderRadius: "10px",
          padding: "5px",
        }}
      >
        Komentar
      </p>
    </div>
  );
}
