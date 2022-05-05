import { Grid } from "@mui/material";
import React from "react";
import NavbarAbout from "../component/navbar/NavbarAbout";
import BodyAbout from "../component/navbar/BodyAbout";

export default function About() {
  return (
    <Grid container width="100%" height="100%" spacing="0">
      <Grid item xs={8}>
        <NavbarAbout></NavbarAbout>
        <BodyAbout></BodyAbout>
      </Grid>
      <Grid
        item
        xs={4}
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <img
          src="/asset/about.png"
          alt="gambar"
          style={{
            height: "100vh",
          }}
        ></img>
      </Grid>
    </Grid>
  );
}
