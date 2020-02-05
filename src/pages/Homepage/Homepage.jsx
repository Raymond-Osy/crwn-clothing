import React from "react";
import Directory from "../../components/directory/Directory";
// import Carousel from "../../components/carousel/Carousel";
import { HomePageContainer } from "./Hompage.style"
// import "./Homepage.scss";

const Homepage = () => (
  <HomePageContainer>
    {/* <Carousel /> */}
    <Directory />
  </HomePageContainer>
);

export default Homepage;
