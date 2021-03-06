import { Button, Card, CardMedia, Grid } from "@mui/material";
import React from "react";
import CardCollection from "../card/CardCollection";
import { useQuery, gql } from "@apollo/client";
import LoadingSvg from "../card/LoadingSvg";

export default function BodyCollection() {
  const DataProduk = [
    {
      link: "https://support.enplug.com/hc/article_attachments/360000196983/2018-01-25_17-04-29.png",
    },
  ];

  const { loading, error, data } = useQuery(gql`
    query MyQuery {
      clothes {
        id
        name
        image_url
      }
    }
  `);

  if (loading)
    return (
      <div class="position-absolute top-50 start-50 translate-middle">
        <LoadingSvg />
      </div>
    );

  if (error) return <p>{error}</p>;

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
        {/* map untuk array yang nampilin setiap data yang ada
         */}
        {data.clothes.map((item) => (
          <Grid item>
            <CardCollection
              linkGambar={item.image_url}
              id={item.id}
              name={item.name}
            ></CardCollection>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
