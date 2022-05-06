import { Grid } from "@mui/material";
import React from "react";
import BodyDetail from "../component/navbar/BodyDetail";
import NavbarDetail from "../component/navbar/NavbarDetail";

export default function Detail() {
  return (
    <div>
      <Grid container width="100%" height="100%" spacing="0">
        <Grid
          item
          xs={5}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <img
            src="/asset/about.png"
            alt="gambar"
            style={{
              height: "100vh",
            }}
          ></img>
        </Grid>
        <Grid item xs={7}>
          <NavbarDetail></NavbarDetail>
          <BodyDetail></BodyDetail>
        </Grid>
      </Grid>
    </div>
  );
}
