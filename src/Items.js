import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";

function PizzaItems(Props) {
  const Pizza = [
    {
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVkL0c7FYYK8hFIyhLLT8wZnXd1sn6SAmaFsDR-q-kA&s",
      Name: "PizzaHot",
      Price: "200",
    },
    {
      Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3d60l5ZgKggS2eR2OBQFMXG5ghk-9VpHUZg&usqp=CAU",
      Name: "PizzaHost",
      Price: "400",
    },
    {
      Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KMHqrTgSo0YQo1f5Eqjbc6M-7-v0SnekWw&usqp=CAU",
      Name: "PizzaHottesr",
      Price: "600",
    },
    {
      Image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3sqdvmzeEsFPmO0kNp2j8frlRasppX2hng&usqp=CAU",
      Name: "PizzaMasier",
      Price: "800",
    },
  ];
  return (
    <Grid container xs={12}  sx={{ marginBottom: "8%",overflowX:"scroll" }}>
      <Grid container item xs={12}>
        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontSize: { xs:"30px", xl:"70px" },
            color: "blue",
            marginTop: {xs:"100px",xl:"120px"},
            marginLeft:{xs:"35%",xl:"43%"},
            marginBottom:{xs:"10px",xl:"20px"}
          }}
        >
          Pizza
        </Typography>
      </Grid>

      <Grid container item xs={12}>
        {Pizza.map((item) => (
          <PizzaCard
            Image={item.Image}
            Name={item.Name}
            Price={item.Price}
            l={Props.r}
            j={Props.n}
          />
        ))}
      </Grid>
      <BurgerItems l={Props.r} j={Props.n} />
    </Grid>
  );
}

function PizzaCard(Props) {
  return (
    <Grid container item xs={12}  xl={3} justifyContent={"center"} >
      <Grid
        item
        xs={10}
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center"
         ,  height: "250px",

        }}
      >
        <img
          src={Props.Image}
          alt="not found"
          style={{
            width: "100%",
            height:"100%"
          }}
        />
      </Grid>

      <Grid
        item
        xs={10}
        sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}
      >
        <Typography
          variant="h1"
          component="h2"
          sx={{ fontSize: { xs: "18px", xl: "20px" }, color: "blue" }}
        >
          {Props.Name}
        </Typography>
      </Grid>
      <Grid
        item
        xs={10}
        sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}
      >
        <Typography
          variant="h1"
          component="h2"
          sx={{ fontSize: { xs: "15px", xl: "15px" }, color: "blue" }}
        >
          {Props.Price}
        </Typography>
      </Grid>

      <Grid
        item
        xs={10}
        sx={{ alignItems: "center", display: "flex", justifyContent: "center" ,marginBottom:{xs:"20px",xl:"20px"}}}
      >
        <Button
          variant="contained"
          sx={{
            height: { xs: "25px", xl: "40px" },
            width: { xs: "35px", xl: "100px" },
            fontSize: { xs: "8px", xl: "10px" },
          }}
          onClick={() => Props.j(Props.l + 1)}
        >
          Add to Cart
        </Button>
      </Grid>
    </Grid>
  );
}

function BurgerItems(Props) {
  const Burger = [
    {
      Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTow-Ab3hHVGc96FOGd2tFuOLUvoWM_nZZp39PJFXa4avFK5uwrHh6KYIF-GQ&s",
      Name: "BurgerHot",
      Price: "200",
    },
    {
      Image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk850JE5rzYj2vcCJf_7B2eWazmudDJDJY8JMWdGxaSj-iFJ5gwdBEfNFT9w&s",
      Name: "BurgerHost",
      Price: "400",
    },
    {
      Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYGW_a8z1yJUYZDlLlbpTLjJeIwd0Z3DkO5afSgbSkV_ouLEvi3K6r4ptfiQ&s",
      Name: "BurgerHottesr",
      Price: "600",
    },
    {
      Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSdaM-C6KHjluNz_OONDANuaJcdv48cElqA&usqp=CAU",
      Name: "BurgerMasier",
      Price: "800",
    },
  ];
  return (
    <Grid container xs={12}   sx={{overflowX:"scroll"}}>
      <Grid container item xs={12}>
        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontSize: { xs: "30px", xl: "70px" },
            color: "blue",
            marginTop: "20px",
            marginLeft:{xs:"35%",xl:"43%"},
            marginBottom:{xs:"10px",xl:"20px"}
          }}
        >
          Burger
        </Typography>
      </Grid>

      <Grid container item xs={12}>
        {Burger.map((item) => (
          <BurgerCard
            Image={item.Image}
            Name={item.Name}
            Price={item.Price}
            h={Props.l}
            k={Props.j}
          />
        ))}
      </Grid>
    </Grid>
  );
}

function BurgerCard(Props) {
  return (
    <Grid container item xs={12} xl={3} justifyContent={"center"} >
      <Grid
        item
        xs={10}
        sx={{ alignItems: "center", display: "flex", justifyContent: "center" ,height: "250px" }}
        
      >
        <img
          src={Props.Image}
          alt="not found"
          style={{ height:"100%", width:"100%"}}
        />
      </Grid>

      <Grid
        item
        xs={10}
        sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}
      >
        <Typography
          variant="h1"
          component="h2"
          sx={{ fontSize: { xs: "18px", xl: "20px" }, color: "blue" }}
        >
          {Props.Name}
        </Typography>
      </Grid>
      <Grid
        item
        xs={10}
        sx={{ alignItems: "center", display: "flex", justifyContent: "center" }}
      >
        <Typography
          variant="h1"
          component="h2"
          sx={{ fontSize: { xs: "15px", xl: "15px" }, color: "blue" }}
        >
          {Props.Price}
        </Typography>
      </Grid>

      <Grid
        item
        xs={10}
        sx={{ alignItems: "center", display: "flex", justifyContent: "center",marginBottom:{xs:"20px",xl:"20px"} }}
      >
        <Button
          variant="contained"
          sx={{
            height: { xs: "25px", xl: "40px" },
            width: { xs: "35px", xl: "100px" },
            fontSize: { xs: "8px", xl: "10px" },
          }}
          onClick={() => Props.k(Props.h + 1)}
        >
          Add to Cart
        </Button>
      </Grid>
    </Grid>
  );
}
export default PizzaItems;
