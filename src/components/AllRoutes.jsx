import {Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import SugarPlay from "../pages/SugarPlay";
import Lips from "../pages/Lips";
import Eyes from "../pages/Eyes";
import Face from "../pages/Face";
import Nails from "../pages/Nails"
import Skincare from "../pages/Skincare";
import Accessories from "../pages/Accessories";
import Gifting from "../pages/Gifting";
import Bestseller from "../pages/Bestseller";
import NewLaunches from "../pages/NewLaunches";
import Offers from "../pages/Offers";
import Blog from "../pages/Blog";
import SelectShade from "../pages/SelectShade";
import Favourite from '../components/Favourite';
import BagData from "./BagData";
import SearchData from '../pages/SearchData'
import NotFound from "../pages/NotFound";
import Payment from "../pages/Payment";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sugarPlay" element={<SugarPlay />} />
      <Route path="/lips" element={<Lips />} />
      <Route path="/Eyes" element={<Eyes />} />
      <Route path="/face" element={<Face />} />
      <Route path="/nails" element={<Nails />} />
      <Route path="/skincare" element={<Skincare />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/gifting" element={<Gifting />} />
      <Route path="/bestseller" element={<Bestseller />} />
      <Route path="/newLaunches" element={<NewLaunches/>} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/selectShade" element={<SelectShade />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/bagData" element={<BagData />} />
      <Route path="/searchData" element={<SearchData />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}