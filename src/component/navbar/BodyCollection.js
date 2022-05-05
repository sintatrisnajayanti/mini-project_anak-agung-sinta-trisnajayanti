import { Button, Card, CardMedia, Grid } from "@mui/material";
import React from "react";
import CardCollection from "./CardCollection";

export default function BodyCollection() {
  const DataProduk = [
    { link: "/asset/homebody1.png" },
    { link: "/asset/homebody1.png" },
    { link: "/asset/homebody1.png" },
    { link: "/asset/homebody1.png" },
    { link: "/asset/homebody1.png" },
    { link: "/asset/homebody1.png" },
    { link: "/asset/homebody1.png" },
    { link: "/asset/homebody1.png" },
  ];
  return (
    <div>
      <Grid
        spacing={4}
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        padding={"10px"}
      >
        {DataProduk.map((item) => (
          <Grid item>
            <CardCollection linkGambar={item.link}></CardCollection>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
