import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

export default function AllRoutes() {
  return (
    <>
    <Routes>
<Route exact path="/" element={<Home />} ></Route>
<Route exact path="/cart" element={<Cart />} ></Route>

</Routes>
    </>
  )
}














