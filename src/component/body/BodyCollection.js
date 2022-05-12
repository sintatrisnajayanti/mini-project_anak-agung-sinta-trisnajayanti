import { Button, Card, CardMedia, Grid } from "@mui/material";
import React from "react";
import CardCollection from "../card/CardCollection";
import { useQuery, gql } from "@apollo/client";

export default function BodyCollection() {
  const DataProduk = [
    {
      link: "https://support.enplug.com/hc/article_attachments/360000196983/2018-01-25_17-04-29.png",
    },
    { link: "/asset/homebody1.png" },
    { link: "/asset/homebody1.png" },
    { link: "/asset/homebody1.png" },
    { link: "/asset/homebody1.png" },
    { link: "/asset/homebody1.png" },
    { link: "/asset/homebody1.png" },
    { link: "/asset/homebody1.png" },
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

  if (loading) return <p>loading</p>;
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
