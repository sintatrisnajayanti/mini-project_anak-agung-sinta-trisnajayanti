import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import NavbarAbout from "../component/navbar/NavbarAbout";
import BodyAbout from "../component/body/BodyAbout";
import Footer from "../component/navbar/Footer";

export default function About() {
  const versiHP = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Grid container width="100%" minHeight="100vh">
        <Grid item xs={12} sm={8}>
          <NavbarAbout></NavbarAbout>
          <BodyAbout></BodyAbout>
        </Grid>
        {!versiHP && (
          <Grid
            item
            xs={12}
            sm={4}
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
                width: "50vw",
              }}
            ></img>
          </Grid>
        )}
      </Grid>
      <Footer></Footer>
    </>
  );
}
