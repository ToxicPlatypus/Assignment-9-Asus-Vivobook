import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "../src/Component/Header/Header";
import Home from "./Component/Home/Home";
import Review from "./Component/Review/Review";
import Dashboard from "./Component/Dashboard/Dashboard";
import Blogs from "./Component/Blogs/Blogs";
import About from "./Component/About/About";
import PageNotFound from "./Component/404/PageNotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Review></Review>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
