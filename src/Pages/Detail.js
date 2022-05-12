import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import BodyDetail from "../component/body/BodyDetail";
import NavbarDetail from "../component/navbar/NavbarDetail";
import { useParams } from "react-router-dom";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import Footer from "../component/navbar/Footer";

export default function Detail() {
  const params = useParams();
  const [loaded, setLoaded] = useState(false);

  const [getData, { loading, error, data }] = useLazyQuery(
    gql`
      query MyQuery($id: Int!) {
        clothes_by_pk(id: $id) {
          id
          image_url
          name
        }
        clothes_comment(where: { clothes_id: { _eq: $id } }) {
          clothes_id
          comment
          id
          name
        }
        clothes_detail(where: { clothers_id: { _eq: $id } }) {
          clothers_id
          description
          id
          price
        }
      }
    `
  );

  const handleGetData = () => {
    getData({
      variables: {
        id: params.id,
      },
    });
  };

  useEffect(() => {
    handleGetData();
    setLoaded(true);
  }, []);

  if (loading || !loaded) return <p>loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Grid container width="100%" height="100%" spacing="0">
        <Grid
          item
          xs={6}
          container
          direction="row"
          paddingRight={"40px"}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <img
            src={data.clothes_by_pk.image_url}
            alt="gambar"
            style={{
              height: "100vh",
              width: "100vw",
            }}
          ></img>
        </Grid>
        <Grid item xs={6}>
          <NavbarDetail></NavbarDetail>
          <BodyDetail
            getData={handleGetData}
            clothesId={data.clothes_by_pk.id}
            description={data.clothes_detail[0].description}
            comments={data.clothes_comment}
          ></BodyDetail>
        </Grid>
      </Grid>
      <Footer></Footer>
    </div>
  );
}
