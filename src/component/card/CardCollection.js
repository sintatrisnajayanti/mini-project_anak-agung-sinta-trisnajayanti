import { Button, Card, CardMedia, Grid } from "@mui/material";
import React from "react";

export default function CardCollection({ linkGambar, id, name }) {
  return (
    <div style={{ maxWidth: 241 }}>
      <Card>
        <CardMedia
          component="img"
          height="241"
          image={linkGambar}
          alt="GambarProduk"
        />
      </Card>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <h5
          style={{
            fontSize: "14px",
            fontFamily: "montserrat",
            padding: "5px",
            fontWeight: "bold",
          }}
        >
          {name}
        </h5>
        <Button
          variant="contained"
          size="small"
          href={`/detailproduk/${id}`}
          sx={{
            bottom: "80px",
            textTransform: "none",
            backgroundColor: "black",
          }}
        >
          Detail
        </Button>
      </Grid>
    </div>
  );
}
