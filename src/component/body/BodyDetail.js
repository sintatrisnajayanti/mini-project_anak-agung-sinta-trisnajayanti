import { Button, useMediaQuery } from "@mui/material";
import React from "react";
import FormComment from "../card/FormComment";

export default function BodyDetail({
  getData,
  clothesId,
  name,
  material,
  comments,
  price,
  sizes,
}) {
  const versiHP = useMediaQuery("(max-width:600px)");
  return (
    <div
      style={{
        margin: versiHP ? "10px" : "",
        textAlign: "left",
        maxWidth: "100vw",
      }}
    >
      <p
        style={{
          color: "black",
          fontSize: "20px",
          border: "1px solid black",
          borderRadius: "10px",
          padding: "5px",
        }}
      >
        {name}
        <br></br>
        Material: {material}
        <br></br>
        Ready stock size: {sizes}
        <br></br>
        Harga: {price}
      </p>
      <div style={{ overflow: "scroll", height: "60vh" }}>
        <FormComment getData={getData} clothesId={clothesId}></FormComment>
        {comments.map((comment, i) => (
          <p
            style={{
              color: "black",
              fontSize: "16px",
              border: "2px solid black",
              borderRadius: "10px",
              padding: "5px",
              marginTop: "10px",
            }}
          >
            {comment.name}
            <br />
            {comment.comment}
          </p>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Button
            style={{
              textTransform: "none",
              fontFamily: "montserrat",
              color: "white",
              backgroundColor: "black",
              borderRadius: "180px",
            }}
            href="#bottom"
          >
            {"ORDER NOW!"}
          </Button>
        </div>
      </div>
    </div>
  );
}
