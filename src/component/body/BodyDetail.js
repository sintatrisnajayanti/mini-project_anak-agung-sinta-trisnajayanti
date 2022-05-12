import { Button } from "@mui/material";
import React from "react";
import FormComment from "../card/FormComment";

export default function BodyDetail({
  getData,
  clothesId,
  description,
  comments,
}) {
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
        {description}
      </p>
      <div style={{ overflow: "scroll", height: "70vh" }}>
        <FormComment getData={getData} clothesId={clothesId}></FormComment>
        {comments.map((comment, i) => (
          <p
            style={{
              color: "black",
              fontSize: "20px",
              border: "2px solid black",
              borderRadius: "10px",
              padding: "5px",
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
            {"Contact Us"}
          </Button>
        </div>
      </div>
    </div>
  );
}
