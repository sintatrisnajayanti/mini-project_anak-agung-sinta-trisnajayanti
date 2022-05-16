import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { borderRadius } from "@mui/system";

export default function Footer() {
  const versiHP = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <a name="bottom" id="bottom">
        <Grid
          container
          width="100%"
          height="100%"
          paddingTop="50px"
          paddingBottom="50px"
          style={{
            backgroundColor: "black",
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            container
            direction="row"
            justifyContent="center"
            alignItems={"center"}
          >
            <img
              src="/asset/logo/logofooter.png"
              alt="gambar"
              style={{
                height: "25vh",
                backgroundColor: "white",
                borderRadius: "100%",
              }}
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h1
              style={{
                fontFamily: "montserrat",
                fontSize: "36px",
                fontWeight: "bold",
                color: "white",
                margin: "0px",
                textAlign: versiHP ? "center" : "left",
              }}
            >
              BnS Store
            </h1>
            <p
              style={{
                fontFamily: "montserrat",
                fontSize: "24px",
                color: "white",
                margin: "0px",
                paddingTop: "20px",
                textAlign: versiHP ? "center" : "left",
              }}
            >
              Mampu Memberikan Berbagai Model Pakaian Dengan Bahan Berkualitas
              Bagi Pelanggan Setianya
            </p>
          </Grid>
          <Grid item xs={12} sm={4} container direction={"column"}>
            <Grid item container>
              <a href="https://www.facebook.com/bnsstore.bali">
                <div style={{ display: "flex" }}>
                  <FacebookOutlinedIcon
                    fontSize="large"
                    style={{
                      color: "white",

                      width: "100px",
                    }}
                  />
                  <p style={{ color: "white" }}>bnsstore.bali</p>
                </div>
              </a>
              <Grid item container>
                <a href="https://api.whatsapp.com/send?phone=6281237856221">
                  <div style={{ display: "flex" }}>
                    <WhatsappOutlinedIcon
                      fontSize="large"
                      style={{
                        color: "white",

                        width: "100px",
                      }}
                    />
                    <p style={{ color: "white" }}>081-237-856-221</p>
                  </div>
                </a>
                <Grid item container>
                  <a href="https://www.google.com/maps/dir//bnsstore.bali/@-8.6075099,115.1435675,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd23ee065a5d2b7:0x8f7d369ed141a9c4!2m2!1d115.2136081!2d-8.6075162">
                    <div style={{ display: "flex" }}>
                      <StorefrontOutlinedIcon
                        fontSize="large"
                        style={{
                          color: "white",

                          width: "100px",
                        }}
                      />
                      <p style={{ color: "white" }}>
                        Jalan Achmad Yani No.398 Peguyangan Kaja Denpasar Utara
                        Kota Denpasar Bali 80239
                      </p>
                    </div>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </a>
    </div>
  );
}
