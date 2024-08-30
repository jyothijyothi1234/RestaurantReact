import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function Navbar(Props) {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        border: "1px solid white",
        bgcolor: "greenyellow",
        marginTop: "0",
        position: "fixed",
      }}
    >
      <Grid
        item
        xs={8}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: { xs: "30px", xl: "180px" },
          paddingTop: "17px",
        }}
      >
        <Typography
          variant="h1"
          component="h2"
          color={"red"}
          sx={{ fontSize: { xs: "40px", xl: "90px" } }}
        >
          KFC
        </Typography>
      </Grid>

      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "50px",
          paddingTop: { xs: "25px", xl: "30px" },
          paddingBottom: "20px",
          width: "50px",
          paddingLeft:{xs:"10px"}
        }}
      >
        <Button
          variant="contained"
          sx={{
            height: { xs: "30px", xl: "50px" },
            fontSize: { xs: "10px", xl: "20px" },
          }}
        >
          Cart {Props.value}
        </Button>
      </Grid>
    </Grid>
  );
}
