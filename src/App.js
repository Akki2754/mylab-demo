import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./component/Navbar.js";
import Hero from "./component/Home.js";
import Home from "./component/Home";
import Cards1 from "./component/Cards1";
import Cards2 from "./component/Cards2";
import Footer from "./component/Footer";
import Carousel from "./component/Carousel";
import Products from "./component/pages/Products";
import Application from "./component/pages/Application";

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Products" component={Products}/>
        <Route exact path="/Application" component={Application}/>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
