import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <Grid container item xs={12}>
      <Grid
        item
        xs={12}
        sx={{ position: "absolute", paddingTop:{xs:"60%",xl:"20%"}, paddingLeft:{xs:"16%",xl:"34%"} }}
      >
        <Typography
          variant="h1"
          component="h2"
          sx={{ fontSize:{ xs:"30px",xl:"70px"}, color: "white" }}
        >
          Visit Our Restaurant
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ position: "absolute", paddingTop: {xs:"70%",xl:"25%"}, paddingLeft:{xs:"25%",xl:"34%"}, }}
      >
        <Typography
          variant="h1"
          component="h2"
          sx={{ fontSize:{ xs:"20px",xl:"70px"}, color: "white" }}
        >
          To taste delicious food
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ position: "absolute", paddingTop:{xs:"80%",xl:"30%"}, paddingLeft:{xs:"40%",xl:"48%"} }}
      >
        <Button variant="contained" sx={{ height:{xs:"40px",xl: "80px"}, width:{xs:"80px",xl:"150px"} }}>
          <Link  to="/Item">Order</Link>
          
        </Button>
      </Grid>

      <Grid item xs={12} sx={{ height: "100vh" }}>
        <img
          src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg"
          alt="not found"
          height="100%"
          width="100%"
        />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
