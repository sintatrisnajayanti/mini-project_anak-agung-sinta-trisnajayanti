import { Button, Card, CardMedia, Grid } from "@mui/material";
import React from "react";

export default function CardCollection({ linkGambar }) {
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
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="contained"
          size="small"
          href="/detailproduk"
          sx={{
            bottom: "50px",
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
