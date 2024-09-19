import "./App.css";
import Navbar from "./Components/Navbar";
import { Route,Routes,Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import PizzaItems from "./Items";
import { useState } from "react";
import Gester from "./guest";
function App() {
  const[value,setValue]=useState(0);
  return (
    <div className="App">
{/* <Navbar  value={value} /> */}

{/* <Routes>
  <Route  path="/"  element={<LandingPage  />}  />
  <Route  path="/order"  element={<PizzaItems   r={value} n={setValue}  />}  />
</Routes> */}
<Gester  />


    </div>
  );
}

export default App;
